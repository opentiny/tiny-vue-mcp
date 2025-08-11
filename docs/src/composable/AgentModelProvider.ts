import type { ChatCompletionResponse } from '@opentiny/tiny-robot-kit'
import type { ChatCompletionRequest } from '@opentiny/tiny-robot-kit'
import type { StreamHandler } from '@opentiny/tiny-robot-kit'
import { BaseModelProvider } from '@opentiny/tiny-robot-kit'
import type { AIModelConfig } from '@opentiny/tiny-robot-kit'
import { reactive } from 'vue'
import { $local, isEnvLLMDefined, isLocalLLMDefined } from './utils'
import { createDeepSeek } from '@ai-sdk/deepseek'
import { streamText } from 'ai'
import { experimental_createMCPClient as createMCPClient, stepCountIs } from 'ai'
import { createMessageChannelClientTransport } from '@opentiny/next-sdk'

const transport = createMessageChannelClientTransport('endpoint')

const deepseek = createDeepSeek({
  apiKey: import.meta.env.VITE_LLM_API_KEY ?? ''
})

const onToolCallChain = (part: any, handler: StreamHandler, lastToolCall: any) => {
  if (part.type == 'tool-input-start') {
    const infoItem = reactive({
      id: part.id,
      title: part.name,
      content: `\n正在调用工具${part.name}...`
    })
    lastToolCall.items.push(infoItem)
    handler.onMessage(lastToolCall)
  }

  if (part.type == 'tool-input-delta') {
    const find = lastToolCall.items.find((item: any) => item.id === part.id)
    if (find) {
      find.content += part.delta
    }
  }

  if (part.type == 'tool-result') {
    const find = lastToolCall.items.find((item: any) => item.id === part.toolCallId)
    if (find) {
      find.content += part.output.content[0].text
    }
  }
}

export class AgentModelProvider extends BaseModelProvider {
  constructor(config: AIModelConfig) {
    super(config)
  }

  /** 同步请示不需要实现 */
  chat(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    throw new Error('Method not implemented.')
  }

  async chatStream(request: ChatCompletionRequest, handler: StreamHandler): Promise<void> {
    // 验证请求的messages属性，必须是数组，且每个消息必须有role\content属性
    const lastMessage = request.messages[request.messages.length - 1].content
    // 创建nextClient
    const mcpClient = await createMCPClient({
      transport: transport
    })

    const tools = await mcpClient.tools()
    const lastToolCall = {
      type: 'chain',
      items: []
    }
    const result = streamText({
      model: deepseek('deepseek-chat'),
      tools,
      prompt: lastMessage,
      stopWhen: stepCountIs(5),
      onFinish: async () => {
        await mcpClient.close()
      }
    })

    const content = reactive({
      type: 'markdown',
      content: ''
    })

    for await (const part of result.fullStream) {
      console.log(part, part.type)

      // 节点开始
      if (part.type === 'start') {
        handler.onMessage(content)
      }

      // if (part.type == 'tool-input-start') {
      //   content.content += `正在调用工具：${part.toolName}，\n\n  参数：`
      // }

      // if (part.type == 'tool-input-delta') {
      //   content.content += part.delta
      // }

      // if (part.type == 'tool-result') {
      //   content.content += `\n\n  工具调用完成，结果：${part.output.content[0].text} \n\n  `
      // }

      if (part.type.startsWith('tool-')) {
        onToolCallChain(part, handler, lastToolCall)
      }

      if (part.type === 'text-delta') {
        content.content += part.text
      }
    }
  }
}

<script setup lang="tsx">
import type { AttachmentsProps, BubbleListProps, PromptsProps } from 'ant-design-x-vue'
import {
  CloudUploadOutlined,
  EllipsisOutlined,
  FireOutlined,
  PaperClipOutlined,
  ReadOutlined,
  ShareAltOutlined,
  UserOutlined
} from '@ant-design/icons-vue'
import { Badge, Button, Flex, Space, Typography, theme } from 'ant-design-vue'
import { Attachments, Bubble, Prompts, Sender, useXAgent, useXChat, Welcome } from 'ant-design-x-vue'
import { computed, h, reactive, ref, watch } from 'vue'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { streamText } from 'ai'
import { experimental_createMCPClient as createMCPClient, stepCountIs } from 'ai'
import { createMessageChannelClientTransport } from '@opentiny/next-sdk'
import markdownit from 'markdown-it'

const deepseek = createGoogleGenerativeAI({
  apiKey: 'AIzaSyC-lJp6x1nw-mVzup-ALkyeW7GdDLafjCk'
})

const md = markdownit({ html: true, breaks: true })

const transport = createMessageChannelClientTransport('endpoint')

const { token } = theme.useToken()

const styles = computed(() => {
  return {
    'layout': {
      'width': '100%',
      'height': '722px',
      'border-radius': `${token.value.borderRadius}px`,
      'display': 'flex',
      'background': `${token.value.colorBgContainer}`,
      'font-family': `AlibabaPuHuiTi, ${token.value.fontFamily}, sans-serif`
    },
    'menu': {
      'background': `${token.value.colorBgLayout}80`,
      'width': '280px',
      'height': '100%',
      'display': 'flex',
      'flex-direction': 'column'
    },
    'conversations': {
      'padding': '0 12px',
      'flex': 1,
      'overflow-y': 'auto'
    },
    'chat': {
      'height': '100%',
      'width': '100%',
      'max-width': '700px',
      'margin': '0 auto',
      'box-sizing': 'border-box',
      'display': 'flex',
      'flex-direction': 'column',
      'padding': `${token.value.paddingLG}px`,
      'gap': '16px'
    },
    'messages': {
      flex: 1
    },
    'placeholder': {
      'padding-top': '32px',
      'text-align': 'left',
      'flex': 1
    },
    'sender': {
      'box-shadow': token.value.boxShadow
    },
    'logo': {
      'display': 'flex',
      'height': '72px',
      'align-items': 'center',
      'justify-content': 'start',
      'padding': '0 24px',
      'box-sizing': 'border-box'
    },
    'logo-img': {
      width: '24px',
      height: '24px',
      display: 'inline-block'
    },
    'logo-span': {
      'display': 'inline-block',
      'margin': '0 8px',
      'font-weight': 'bold',
      'color': token.value.colorText,
      'font-size': '16px'
    },
    'addBtn': {
      background: '#1677ff0f',
      border: '1px solid #1677ff34',
      width: 'calc(100% - 24px)',
      margin: '0 12px 24px 12px'
    }
  } as const
})

defineOptions({ name: 'PlaygroundIndependentSetup' })

const senderPromptsItems: PromptsProps['items'] = [
  {
    key: '1',
    description: '帮我在商品列表中选中最贵的手机商品',
    icon: h(FireOutlined, { style: { color: '#FF4D4F' } })
  },
  {
    key: '2',
    description: '帮我在商品列表中新增一个华为P70手机',
    icon: h(ReadOutlined, { style: { color: '#1890FF' } })
  }
]

const roles: BubbleListProps['roles'] = {
  ai: {
    avatar: { icon: <UserOutlined />, style: { background: '#fde3cf' } },
    placement: 'start',
    typing: { step: 5, interval: 20 },
    styles: {
      content: {
        borderRadius: '16px'
      }
    }
  },
  local: {
    avatar: { icon: <UserOutlined />, style: { background: '#87d068' } },
    placement: 'end',
    variant: 'shadow'
  }
}

// ==================== State ====================
const headerOpen = ref(false)
const content = ref('')
const attachedFiles = ref<AttachmentsProps['items']>([])
const agentRequestLoading = ref(false)

// ==================== Runtime ====================
const [agent] = useXAgent<string, { message: string }, string>({
  request: async ({ message }, { onSuccess, onUpdate }) => {
    agentRequestLoading.value = true
    // 创建nextClient
    const mcpClient = await createMCPClient({
      transport: transport
    })
    const tools = await mcpClient.tools()
    const result = streamText({
      model: deepseek('gemini-2.5-pro'),
      tools,
      prompt: message,
      stopWhen: stepCountIs(5)
    })

    let content = ''

    for await (const part of result.fullStream) {
      console.log(part, part.type)

      if (part.type === 'tool-input-start') {
        content += `调用工具：${part.toolName} \n\n 参数：`
      }

      if (part.type === 'tool-input-delta') {
        content += part.delta
      }

      if (part.type === 'text-delta') {
        content += part.text
      }

      if (part.type === 'error') {
        content += `\n\n 出错啦：${part.error.message}`
      }

      onUpdate(content)
    }

    agentRequestLoading.value = false
    onSuccess([content])
  }
})

const { onRequest, messages, setMessages } = useXChat({
  agent: agent.value
})

// ==================== Event ====================
function onSubmit(nextContent: string) {
  if (!nextContent) return
  onRequest(nextContent)
  content.value = ''
}

const onPromptsItemClick: PromptsProps['onItemClick'] = (info) => {
  onRequest(info.data.description as string)
}

const handleFileChange: AttachmentsProps['onChange'] = (info) => (attachedFiles.value = info.fileList)

// ==================== Nodes ====================
const placeholderNode = computed(() =>
  h(Space, { direction: 'vertical', size: 16, style: styles.value.placeholder }, () => [
    h(Welcome, {
      variant: 'borderless',
      icon: 'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp',
      title: "Hello, I'm Ant Design X",
      description: 'Base on Ant Design, AGI product interface solution, create a better intelligent vision~',
      extra: h(Space, {}, () => [h(Button, { icon: h(ShareAltOutlined) }), h(Button, { icon: h(EllipsisOutlined) })])
    })
  ])
)

const renderMarkdown = (mdStr: string) => {
  return (
    <Typography>
      <div v-html={md.render(mdStr)} />
    </Typography>
  )
}

const items = computed<BubbleListProps['items']>(() => {
  if (messages.value.length === 0) {
    return [{ content: placeholderNode, variant: 'borderless' }]
  }

  return messages.value.map(({ id, message, status }) => {
    return {
      key: id,
      role: status === 'local' ? 'local' : 'ai',
      content: message ? renderMarkdown(message) : ''
    }
  })
})
</script>

<template>
  <div :style="styles.layout">
    <div :style="styles.chat">
      <!-- 🌟 消息列表 -->
      <Bubble.List :items="items" :roles="roles" :style="styles.messages" />

      <!-- 🌟 提示词 -->
      <Prompts :items="senderPromptsItems" @item-click="onPromptsItemClick" />

      <!-- 🌟 输入框 -->
      <Sender
        :value="content"
        :style="styles.sender"
        :loading="agentRequestLoading"
        @submit="onSubmit"
        @change="(value) => (content = value)"
      >
        <template #prefix>
          <Badge :dot="attachedFiles.length > 0 && !headerOpen">
            <Button type="text" @click="() => (headerOpen = !headerOpen)">
              <template #icon>
                <PaperClipOutlined />
              </template>
            </Button>
          </Badge>
        </template>

        <template #header>
          <Sender.Header
            title="Attachments"
            :open="headerOpen"
            :styles="{ content: { padding: 0 } }"
            @open-change="(open) => (headerOpen = open)"
          >
            <Attachments :before-upload="() => false" :items="attachedFiles" @change="handleFileChange">
              <template #placeholder="type">
                <Flex v-if="type && type.type === 'inline'" align="center" justify="center" vertical gap="2">
                  <Typography.Text style="font-size: 30px; line-height: 1">
                    <CloudUploadOutlined />
                  </Typography.Text>
                  <Typography.Title :level="5" style="margin: 0; font-size: 14px; line-height: 1.5">
                    Upload files
                  </Typography.Title>
                  <Typography.Text type="secondary"> Click or drag files to this area to upload </Typography.Text>
                </Flex>
                <Typography.Text v-if="type && type.type === 'drop'"> Drop file here </Typography.Text>
              </template>
            </Attachments>
          </Sender.Header>
        </template>
      </Sender>
    </div>
  </div>
</template>

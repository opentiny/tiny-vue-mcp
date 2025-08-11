export const generateGeminiNano = async () => {
  const { defaultTemperature, maxTemperature, defaultTopK, maxTopK } = await LanguageModel.params()

  const available = await LanguageModel.availability()
  if (available !== 'unavailable') {
    const session = await LanguageModel.create()

    // Prompt the model and stream the result:
    const stream = session.promptStreaming('你好')
    for await (const chunk of stream) {
      console.log(chunk)
    }
  }
}

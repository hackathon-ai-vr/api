import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class OpenAIFacade {
  async getThread(params: OpenAI.Beta.Threads.Messages.MessageCreateParams) {
    return openai.beta.threads.create({ messages: [params] })
  }

  run(threadId: string, onTextDelta: (text: string) => void) {
    const assistantId = process.env.OPENAI_ASSISTANT_ID;
    openai.beta.threads.runs.stream(threadId, {
      assistant_id: assistantId
    })
      .on('textDelta', (textDelta) => onTextDelta(textDelta.value))
  }
}

export default new OpenAIFacade()
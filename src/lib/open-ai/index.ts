import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";

const openAIApiKey: string = process.env.NEXT_APP_OPENAI_API_KEY|| "";

if (!openAIApiKey) throw new Error("OpenAI API key not found.");

export const llm = new ChatOpenAI({
  openAIApiKey,
  modelName: "gpt-4",
  temperature: 0,
});

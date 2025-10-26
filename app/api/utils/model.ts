import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { getToken } from "next-auth/jwt";

export interface EmailGeneratorRequest {
  language: string;
  tone: string;
  length: string;
  topic: string;
  userId: string;
}
export interface ParaphrasingProps {
  language: string;
  tone: string;
  text: string;
}

export const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.AI_KEY!,
  temperature: 0.7,
  maxOutputTokens: 2000,
  streaming: true,
});

export const prompt = PromptTemplate.fromTemplate(
  "Write a professional, context-appropriate email in the specified {language} (if provided, otherwise use English), with a {tone} tone, around {length} words, focusing on {topic}.If the topic suggests a recruiter or job-related message, write a recruiter-friendly outreach email; otherwise, write an appropriate email for that topic. Return only the complete email text — no explanations, no extra text, and no markdown."
);

// Paraphrasing

export const TogetherPrompt = PromptTemplate.fromTemplate(
  `Rewrite the following text in the specified {language} (if provided, otherwise use English), using a {tone} tone.
Ensure the rewritten version is formal, clear, grammatically correct, and preserves the original meaning.
Focus on improving sentence flow, coherence, and readability while maintaining the same context and intent.
Return only the paraphrased text — no explanations, no extra text, and no markdown.

Text:
{text}`
);

export const clientToken = async (req: any, secret: string | undefined ) => {
  const token = await getToken({ req, secret : secret });
  if (!token) return { error: "Unauthorized" };
  return token;
};

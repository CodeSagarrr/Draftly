import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import {
  model,
  TogetherPrompt,
  ParaphrasingProps,
} from "@/app/api/utils/model";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
  const cookieName =
    process.env.NODE_ENV === "production"
      ? "__Secure-authjs.session-token"
      : "authjs.session-token";
  const { language, tone, text }: ParaphrasingProps = await req.json();
  if (!text)
    return Response.json({ error: "Field are missing " }, { status: 200 });
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName: cookieName,
    secureCookie: process.env.NODE_ENV === "production",
  });
  if (!token) return Response.json({ error: "unauthorize" }, { status: 401 });
  try {
    const chain = TogetherPrompt.pipe(model);
    const stream = new ReadableStream({
      async start(controller) {
        let generatedText = "";

        const response = await chain.stream({
          language: language || "English",
          tone: tone || "Formal",
          text: text,
        });

        for await (const chunk of response) {
          let chunkText = "";
          if (typeof chunk.content === "string") {
            chunkText += chunk.content;
          } else if (Array.isArray(chunk.content)) {
            for (const item of chunk.content) {
              if (item.type === "string" && typeof item.text === "string") {
                chunkText += item.text;
              }
            }
          }
          if (chunkText) {
            generatedText += chunkText;
            controller.enqueue(chunkText);
          }
        }

        await prisma.praphraser.create({
          data: {
            language: language,
            tone: tone,
            content: text,
            userId: token?.id as string,
          },
        });

        controller.close();
      },
    });
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error: any) {
    console.error("Error in paraphrasing route :", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

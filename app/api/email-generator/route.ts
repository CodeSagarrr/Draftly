import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { model, prompt, EmailGeneratorRequest } from "@/app/api/utils/model";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const token = await getToken({ req , secret:process.env.NEXT_AUTH_SEC});
  if (!token) return Response.json({ error: "unauthorize" }, { status: 401 });
  const { language, tone, length, topic }: EmailGeneratorRequest =
    await req.json();

  try {
    const chain = prompt.pipe(model);
    const stream = new ReadableStream({
      async start(controller) {
        let generatedText = "";

        const response = await chain.stream({
          language: language || "English",
          tone: tone || "professional",
          length: length || "150",
          topic: topic || "general business communication",
        });

        for await (const chunk of response) {
          let textChunk = "";

          // Handle both string and object array cases safely
          if (typeof chunk.content === "string") {
            textChunk = chunk.content;
          } else if (Array.isArray(chunk.content)) {
            for (const item of chunk.content) {
              if (item.type === "text" && typeof item.text === "string") {
                textChunk += item.text;
              }
            }
          }

          if (textChunk) {
            generatedText += textChunk;
            controller.enqueue(textChunk);
          }
        }

        await prisma.email.create({
          data: {
            tone,
            length,
            language,
            content: topic,
            userId: token.id as string,
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
    } );
  } catch (error) {
    console.error("Error in generating email :", error);
    return NextResponse.json(
      { error: "Failed to generate email" },
      { status: 500 }
    );
  }
}

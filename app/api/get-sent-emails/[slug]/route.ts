import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

const selectKeys = {
  from: true,
  to: true,
  subject: true,
  createdAt: true,
};

export async function GET(req: NextRequest, { params }: any) {
  const { slug } = await params;
  const skip = Number(slug) || 1;
  const limit = 4;

  try {
    const token = await getToken({ req ,secret : process.env.NEXT_AUTH_SEC});
    if (!token)
      return Response.json({ error: "unauthorize" }, { status: 401 });
    
    const totalDocument = await prisma.sendto.count({
      where: { userId: token?.sub },
    });

    const sentEmails = await prisma.sendto.findMany({
      where: { userId: token?.id as string },
      select: selectKeys,
      skip: (skip - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    if (sentEmails.length === 0 || !sentEmails)
      return Response.json({ error: " No more Reciever " }, { status: 400 });

    return Response.json(
      {
        picture: token?.picture || null,
        sentEmails: sentEmails,
        currentTotalPage: sentEmails.length,
        hasNextPage: skip * limit < totalDocument,
        totalDocument: totalDocument,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in getting sent emails :", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

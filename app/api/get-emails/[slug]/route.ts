import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

const selectParams = {
  tone: true,
  language: true,
  length: true,
  content: true,
  createdAt: true,
};

export async function GET(req: NextRequest, { params }: any) {
  const cookieName =
    process.env.NODE_ENV === "production"
      ? "__Secure-authjs.session-token"
      : "authjs.session-token";
  const { slug } = await params;
  const skipNum = Number(slug) || 1;
  const limit = 4;
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
      cookieName: cookieName,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if (!token) return Response.json({ error: token }, { status: 401 });

    const totalDocument = await prisma.email.count({
      where: { userId: token?.sub },
    });
    const userEmails = await prisma.email.findMany({
      where: { userId: token?.sub },
      select: selectParams,
      skip: (skipNum - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    });
    if (userEmails.length === 0 && !userEmails)
      return NextResponse.json(
        { error: " No more created emails !", email: [] },
        { status: 404 }
      );
    return NextResponse.json(
      {
        name: token.name,
        picture: token.picture || null,
        email: userEmails,
        CurrentPagetotalDocument: userEmails.length,
        totalDocument: totalDocument,
        currentPage: skipNum,
        hasNextPage: skipNum * 4 < totalDocument,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error in server to get email", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

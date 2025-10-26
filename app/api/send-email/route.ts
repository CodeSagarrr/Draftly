import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import nodemailer from "nodemailer";
import { getToken } from "next-auth/jwt";

const transport = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 587,
  tls: { rejectUnauthorized: false },
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  const cookieName =
    process.env.NODE_ENV === "production"
      ? "__Secure-authjs.session-token"
      : "authjs.session-token";
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName: cookieName,
    secureCookie: process.env.NODE_ENV === "production",
  });
  if (!token) return Response.json({ error: "unauthorize" }, { status: 401 });

  console.log(token);

  const { to, subject, text } = await req.json();
  if (!to || !subject)
    return NextResponse.json(
      { massege: "Fields are required" },
      { status: 404 }
    );
  try {
    const mail = {
      from: `${token.name} <${token.email}>`,
      to: to,
      subject: subject,
      text: text,
    };

    const info = await transport.sendMail(mail);
    if (!info)
      return NextResponse.json(
        { massege: "email sent failed" },
        { status: 404 }
      );

    const result = await prisma.sendto.create({
      data: {
        from: `${token.name} <${token.email}>`,
        to,
        subject,
        text,
        userId: token.id as string,
      },
    });

    return NextResponse.json(
      { massege: "success", data: result || [] },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in mail server :", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

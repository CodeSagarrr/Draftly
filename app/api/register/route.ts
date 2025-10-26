import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { RegisterSchema } from "@/lib/validation";
import bcrypt from "bcryptjs";


export async function POST(req: NextRequest) {
    const body = await req.json()

    const parsed = await RegisterSchema.safeParseAsync(body);
    if (!parsed.success) return NextResponse.json({error : parsed.error.issues[0].message }, { status: 400 })

    const { username , email, password } = parsed.data;
    if (!email || !password) return NextResponse.json({ message: "Missing field is required" }, { status: 400 });

    try {
        const ExistingUser = await prisma.user.findUnique({ where: { email } });
        if (ExistingUser) {
            return NextResponse.json({ error: "User already exists" , users : ExistingUser }, { status: 409 });
        }

        const hasedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: username,
                email: email,
                password: hasedPassword
            }
        })

        if (!user) return NextResponse.json({ message: "Failed" }, { status: 400 });
        return NextResponse.json({ message: "Success", users: user }, { status: 200 })
    } catch (error: any) {
        console.log("Error in creating users :", error.message)
        NextResponse.json({ message: "Failed", error: error.message }, { status: 500 })
    }
}
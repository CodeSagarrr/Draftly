import { z } from "zod";

export const RegisterSchema = z.object({
    username: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(4, "Password must be atleast 4 characters").max(10, "Password too long")
});

export const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(4, "Password must be atleast 4 characters").max(10, "Password too long")
});

export type SignupInput = z.infer<typeof RegisterSchema>
export type SigninInput = z.infer<typeof LoginSchema>
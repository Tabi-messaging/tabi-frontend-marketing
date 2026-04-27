import  z from "zod";
import { EmailSchema, PasswordSchema } from "./SharedSchema";

export const loginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export type LoginValues = z.infer<typeof loginSchema>;

import  z from "zod";
import { EmailSchema, PasswordSchema } from "./SharedSchema";

export const signUpSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: EmailSchema,
  password: PasswordSchema,
  workspaceName: z.string().min(2, "Workspace name is required"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

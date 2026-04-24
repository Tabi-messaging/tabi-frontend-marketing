import * as z from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[A-Z]/, "At least 1 uppercase")
    .regex(/[0-9]/, "At least 1 number"),
  workspaceName: z.string().min(2, "Workspace name is required"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

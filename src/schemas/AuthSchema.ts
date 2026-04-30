import z from "zod";

export const EmailSchema = z.email({error: "Provide a valid email address"});

export const PasswordSchema = z
  .string()
  .min(8, "At least 8 characters")
  .regex(/[A-Z]/, "At least 1 uppercase")
  .regex(/[0-9]/, "At least 1 number");


export const loginSchema = z.object({
  email: EmailSchema,
  password: z.string().min(1, "Password is required")
});


export const signUpSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: EmailSchema,
  password: PasswordSchema,
  workspaceName: z.string().min(2, "Workspace name is required"),
});


export const otpSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});


export type LoginValues = z.infer<typeof loginSchema>
export type SignUpValues = z.infer<typeof signUpSchema>;
export type OtpValues = z.infer<typeof otpSchema>;
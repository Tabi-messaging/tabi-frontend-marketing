import z from "zod";

export const EmailSchema = z.email();

export const PasswordSchema = z
  .string()
  .min(8, "At least 8 characters")
  .regex(/[A-Z]/, "At least 1 uppercase")
  .regex(/[0-9]/, "At least 1 number");

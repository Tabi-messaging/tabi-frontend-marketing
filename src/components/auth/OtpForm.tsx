"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { otpSchema, OtpValues } from "@/schemas/AuthSchema";
import AuthLayout from "@/components/auth/AuthLayout";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

import "@/styles/loader.css";

interface IOtpFormProps {
  email: string;
}

function OtpForm({ email }: IOtpFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<OtpValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
    mode: "onChange",
  });

  const onSubmit = (data: OtpValues) => {
    console.log("OTP Submitted:", data);
  };

  return (
    <AuthLayout
      title="Verify your email address"
      subtitle={`Enter the code sent to ${email}`}
      isGoogleButtonVisibile={false}
    >
      <form
        className="space-y-5 mt-5 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <InputOTP
              maxLength={6}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup className="flex gap-3 justify-center mx-auto">
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className={
                      "w-6.75 h-8.5 rounded-lg border border-[#E2E2E2] text-center text-lg"
                    }
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />
      </form>

      {!isSubmitting ? (
        <button
          type="button"
          className="text-center w-fit mx-auto block mt-5 cursor-pointer text-sm"
          onClick={() => {
            console.log("Resend OTP");
          }}
        >
          Resend Code
        </button>
      ) : (
        <div className="loader mx-auto mt-5"></div>
      )}
    </AuthLayout>
  );
}

export default OtpForm;

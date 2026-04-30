"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginValues } from "@/schemas/AuthSchema";
import { Button } from "@/components/ui/button";
import FormInput, { PasswordInput } from "@/components/ui/FormInput";
import AuthLayout from "@/components/auth/AuthLayout";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginValues) => {
    console.log(data);
  };

  return (
    <AuthLayout
      title={"Welcome back !"}
      subtitle={"Don't have an account?"}
      linkText={"Sign up"}
      linkHref={"/register"}
    >
      <form className="space-y-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Email address"
          placeholder="Enter your email address"
          {...register("email")}
          error={errors.email?.message}
          isRequired
        />
        <PasswordInput
          label="Password"
          type="password"
          placeholder="********"
          {...register("password")}
          error={errors.password?.message}
          isRequired
        />
        <Button
          type="submit"
          className="w-full bg-primary cursor-pointer mt-1 text-white rounded-lg py-2 hover:bg-button-purple-hover"
        >
          Sign in
        </Button>
      </form>
      <p className="text-primary text-sm text-center mt-5">Forgot Password?</p>
    </AuthLayout>
  );
}

export default LoginPage;

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import GoogleButton from "@/components/auth/GoogleButton";

import Image from "next/image";
import Link from "next/link";
import { loginSchema, LoginValues } from "@/schemas/LoginSchema";
import { Button } from "@/components/ui/button";

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  return (
    <main className="  min-h-[90vh] items-center flex flex-col mt-10 justify-center max-w-8xl ">
      <div className="mx-auto w-10/12 lg:w-1/3 max-w-100.25">
        <Image
          src={"/images/tabi-logo-without-text.svg"}
          alt="Tabi Logo"
          width={34}
          height={34}
          className="mx-auto mt-20"
        />
        <div className="text-center">
          <h1 className="font-medium text-xl my-2">Welcome back ! </h1>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <GoogleButton />
        <form className="space-y-5">
          <div className="space-y-1 mt-6">
            <Label className="text-sm font-medium text-[#454A53]">
              Email address<span className="text-[#FF5C02] -ml-1.5">*</span>
            </Label>
            <Input
              {...register("email")}
              placeholder="Enter your email address"
              className="rounded-lg border-[#E2E2E2] py-2"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium text-[#454A53]">
              Password<span className="text-[#FF5C02] -ml-1.5">*</span>
            </Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="rounded-lg border-[#E2E2E2] py-2"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary cursor-pointer mt-1 text-white rounded-lg py-2 hover:bg-button-purple-hover"
          >
            Sign in
          </Button>
        </form>
        <p className="text-primary text-sm text-center mt-5">Forgot Password?</p>
      </div>
    </main>
  );
}

export default LoginPage;

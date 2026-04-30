"use client";

import { cn } from "@/utils/cn";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

interface IFormInputProps {
  label: string;
  isRequired?: boolean;
  error?: string;
  showErrorMessage?: boolean;
}

const INPUT_CLASS_NAME = "rounded-lg border-[#E2E2E2] py-2";

export default function FormInput({
  label,
  className,
  isRequired = false,
  error,
  ...props
}: IFormInputProps & React.ComponentProps<"input">) {
  return (
    <div className="space-y-1">
      <Label className="text-sm font-medium text-[#454A53]">
        {label}
        {isRequired && <span className="text-[#FF5C02] -ml-1.5">*</span>}
      </Label>
      <Input
        className={cn(INPUT_CLASS_NAME, className, { "border-red-500": error })}
        {...props}
      />
      {error && (
        <p className="text-xs font-medium text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

export function PasswordInput({
  label,
  className,
  type = "password",
  isRequired = false,
  error,
  showErrorMessage = true,
  ...props
}: IFormInputProps & React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = useState(type === "text");

  const currentType = showPassword ? "text" : type;

  return (
    <div className="space-y-1">
      <Label className="text-sm font-medium text-[#454A53]">
        {label}
        {isRequired && <span className="text-[#FF5C02] -ml-1.5">*</span>}
      </Label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Lock className="h-4 w-4 text-gray-400" aria-hidden="true" />
        </div>
        <Input
          type={currentType}
          className={cn("pl-11 pr-10", INPUT_CLASS_NAME, className, {
            "border-red-500": error,
          })}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-gray-500" />
          ) : (
            <Eye className="h-4 w-4 text-gray-500" />
          )}
        </Button>
      </div>
      {error && showErrorMessage && (
        <p className="text-xs font-medium text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

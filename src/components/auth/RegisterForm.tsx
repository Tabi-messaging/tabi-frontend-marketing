"use client";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import FormInput, { PasswordInput } from "@/components/ui/FormInput";
import { signUpSchema, SignUpValues } from "@/schemas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, XCircle } from "lucide-react"; 
import { cn } from "@/utils/cn";

interface IRegisterFormProps {
  onSubmit: (email: string) => void;
}

export default function RegisterForm({ onSubmit }: IRegisterFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  // Watch the password field
  const password = watch("password", "");

  // Validation logic (Matching your Figma screenshot)
  const checks = [
    { label: "At least 1 uppercase", met: /[A-Z]/.test(password) },
    { label: "At least 1 number", met: /[0-9]/.test(password) },
    { label: "At least 8 characters", met: password.length >= 8 },
  ];

  const metCount = checks.filter((c) => c.met).length;

  const onRegistrationSubmit = (data: SignUpValues) => {
    console.log(data);
    onSubmit(data.email);
  };

  return (
    <AuthLayout
      title={"Sign up in minutes"}
      subtitle={"Already have an account?"}
      linkText={"Sign in"}
      linkHref={"/login"}
    >
      <form className="space-y-4 mt-4" onSubmit={handleSubmit(onRegistrationSubmit)}>
        <div className="grid grid-cols-2 gap-2">
          <FormInput
            label="First name"
            placeholder="Enter first name"
            isRequired
            {...register("firstName")}
            error={errors.firstName?.message}
          />
          <FormInput
            label="Last name"
            placeholder="Enter last name"
            isRequired
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </div>
        <FormInput
          label="Email address"
          placeholder="Enter your email address"
          isRequired
          {...register("email")}
          error={errors.email?.message}
        />

        <div>
          <PasswordInput
            label="Password"
            placeholder="********"
            isRequired
            {...register("password")}
            error={errors.password?.message}
            showErrorMessage={false} // We will show custom error messages below
          />

          {/* Password Validation Checklist */}
          {password.length > 0  && (
            <div className="mt-3 space-y-1.5">
              <p className="text-xs text-[#9EA2AD] font-medium mb-2">
                Must contain at least:
              </p>

              <div className="flex gap-1.5 w-10/12">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={cn(
                      "h-1 w-full rounded-full transition-all duration-300",
                      metCount >= step
                        ? metCount === 3
                          ? "bg-green-500"
                          : "bg-red-500"
                        : "bg-slate-100",
                    )}
                  />
                ))}
              </div>

              {checks.map((check, index) => (
                <div key={index} className="flex items-center gap-2">
                  {check.met ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5 text-slate-300" />
                  )}
                  <span
                    className={`text-xs ${check.met ? "text-slate-600" : "text-slate-400"}`}
                  >
                    {check.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <FormInput
          label="Workspace name"
          placeholder="My workspace"
          isRequired
          {...register("workspaceName")}
          error={errors.workspaceName?.message}
        />

        <Button
          type="submit"
          className="w-full bg-[#9499E9] hover:bg-[#8388d7] cursor-pointer mt-2 text-white rounded-md py-6 transition-colors shadow-sm"
        >
          Sign up
        </Button>
      </form>
    </AuthLayout>
  );
}

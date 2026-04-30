"use client";

import { useState } from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import OtpForm from "@/components/auth/OtpForm";

export default function RegisterPage() {
  const [formStep, setFormStep] = useState(0);
  const handleNextStep = (email: string) => {
    setEmail(email);
    setFormStep((prev) => prev + 1);
  };
  const [email, setEmail] = useState("");

  return (
    <>
      {formStep !== 1 && <RegisterForm onSubmit={handleNextStep} />}
      {formStep === 1 && email && <OtpForm email={email} />}
    </>
  );
}

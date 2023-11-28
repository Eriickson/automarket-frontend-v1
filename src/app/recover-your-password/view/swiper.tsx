"use client";
import React from "react";

import { MultiStepForm, MultiStepFormItem } from "@/components/organisms";

import { EnterYourNewPassword, PasswordResetSuccessfully, SendPasswordRecoveryRequest, ValidateCode } from "./steps";

const steps: MultiStepFormItem[] = [
  {
    title: "Has olvidado tu contraseña?",
    description: "Ingresa tu correo electrónico para enviarte un código y así puedas recuperar tu contraseña.",
    component: <SendPasswordRecoveryRequest />,
  },
  {
    title: "Valida el código",
    description: "Ingresa el código que te enviamos a tu correo electrónico.",
    component: <ValidateCode />,
  },
  { title: "Información personal", description: "", component: <EnterYourNewPassword /> },
  { title: "Información personal", description: "", component: <PasswordResetSuccessfully /> },
];

export const SwiperSteps = () => {
  return <MultiStepForm steps={steps} />;
};

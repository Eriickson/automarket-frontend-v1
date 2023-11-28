"use client";
import React from "react";

import { MultiStepForm, MultiStepFormItem } from "@/components/organisms";

import { EnterYourNewPassword, PasswordResetSuccessfully, SendPasswordRecoveryRequest, ValidateCode } from "./steps";

const steps: MultiStepFormItem[] = [
  {
    title: "¿Has olvidado tu contraseña?",
    description: "Proporciona tu correo electrónico para enviarte un código y así puedas recuperar tu contraseña.",
    component: SendPasswordRecoveryRequest,
  },
  {
    title: "Validar código de recuperación",
    description: "Ingresa el código que te enviamos a tu correo electrónico.",
    component: ValidateCode,
  },
  {
    title: "Establece tu nueva contraseña",
    description: "Define una nueva contraseña segura para garantizar la seguridad de tu cuenta.",
    component: EnterYourNewPassword,
  },
  {
    title: "Contraseña restablecida",
    description: "Tu contraseña ha sido restablecida exitosamente.",
    component: PasswordResetSuccessfully,
  },
];

export const SwiperSteps = () => {
  return <MultiStepForm steps={steps} />;
};

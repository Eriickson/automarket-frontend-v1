"use client";
import React from "react";

import { MultiStepForm, MultiStepFormItem } from "@/components/organisms";

import "swiper/css";
import {
  CreateAnAgencyStep,
  RegisterPersonalInformationStep,
  ValidateInformationStep,
  ValidateInvitationCodeStep,
} from "./steps";

export const CreateAnAccountMultiStepForm = () => {
  const steps: MultiStepFormItem[] = [
    {
      component: RegisterPersonalInformationStep,
      description: "Necesitamos algunos datos necesarios para comenzar con la creación de tu cuenta",
      title: "Recopilación de información",
    },
    {
      component: ValidateInvitationCodeStep,
      description: "Ingresa el código que te enviamos a tu correo electrónico.",
      title: "Validar código de invitación",
    },
    {
      component: CreateAnAgencyStep,
      description: "Estos serán los datos que aparecerán en tu perfil de agencia.",
      title: "Crear una agencia",
    },
    {
      component: ValidateInformationStep,
      description: "Revisa que toda la información sea correcta para continuar.",
      title: "Validar tu información",
    },
  ];

  return <MultiStepForm steps={steps} />;
};

"use client";
import React from "react";

import { MultiStepForm, MultiStepFormItem } from "@/components/organisms";

import "swiper/css";
import { CreateAnAgencyStep } from "../steps/CreateAnAgency";
import { RegisterPersonalInformationStep } from "../steps/PersonalInformation";
import { ValidateInvitationCodeStep } from "../steps/ValidateInvitationCode";

export const SwiperSteps = () => {
  const steps: MultiStepFormItem[] = [
    {
      component: <RegisterPersonalInformationStep />,
      description: "Necesitamos algunos datos para crear tu cuenta.",
      title: "Información personal",
    },
    {
      component: <ValidateInvitationCodeStep />,
      description: "Ingresa el código que te enviamos a tu correo electrónico.",
      title: "Validar código de invitación",
    },
    {
      component: <CreateAnAgencyStep />,
      description: "Estos serán los datos que aparecerán en tu perfil de agencia.",
      title: "Crear una agencia",
    },
  ];

  return <MultiStepForm steps={steps} />;
};

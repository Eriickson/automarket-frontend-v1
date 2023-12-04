"use client";
import React from "react";

import { MultiStepForm, MultiStepFormItem } from "@/components/organisms";

import "swiper/css";
import {
  AccountCreatedSuccessfully,
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
      title: "Crea tu cuenta",
    },
    {
      component: ValidateInvitationCodeStep,
      description:
        "Te hemos enviado un código a tu correo electrónico. Ingrésalo para continuar con la creación de tu cuenta.",
      title: "Validar código de invitación",
    },
    {
      component: CreateAnAgencyStep,
      description: "Esta información será la que aparecerán en tu perfil y será visible para los usuarios.",
      title: "Datos de tu agencia",
    },
    {
      component: ValidateInformationStep,
      description: "Revisa que toda la información sea correcta para continuar.",
      title: "Validar tu información",
    },
    {
      component: AccountCreatedSuccessfully,
      description: "Revisaremos la información que nos proporcionaste y serás notificado cuando tu cuenta esté activa.",
      title: "Cuenta creada exitosamente",
    },
  ];

  return <MultiStepForm steps={steps} />;
};

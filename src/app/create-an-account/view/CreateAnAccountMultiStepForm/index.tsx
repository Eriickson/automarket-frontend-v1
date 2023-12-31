"use client";
import React from "react";

import { MultiStepForm, MultiStepFormItem } from "@/components/organisms";

import "swiper/css";
import {
  AccountCreatedSuccessfully,
  CreateAnAgencyStep,
  RegisterPersonalInformationStep,
  ValidateInvitationCodeStep,
} from "./steps";
import { SelectAccountTypeStep } from "./steps/SelectAccountType";

export const CreateAnAccountMultiStepForm = () => {
  const steps: MultiStepFormItem[] = [
    {
      component: SelectAccountTypeStep,
      description: "Elige la opción que mejor se adapte a tus necesidades para comenzar con la creación de tu cuenta.",
      title: "Selecciona el tipo de cuenta",
    },
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
      component: AccountCreatedSuccessfully,
      description: "Revisaremos la información que nos proporcionaste y serás notificado cuando tu cuenta esté activa.",
      title: "Cuenta creada exitosamente",
    },
  ];

  return <MultiStepForm steps={steps} />;
};

"use client";

import React, { useState } from "react";

import { Stack } from "@chakra-ui/react";

import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { InvitationSent } from "../invitation-sent";
import { SignupHolder } from "./signup-form-holder";

export const SignupFormContainer = () => {
  const [invitationSent, setInvitationSent] = useState(false);

  async function handleResendInvitation() {}

  return (
    <Stack spacing="6">
      <TitleLoginComponent
        description={
          invitationSent
            ? "Te hemos enviado una invitación a tu correo electrónico para que puedas completar tu registro."
            : "Crea tu cuenta para poder acceder a todos los beneficios de la plataforma."
        }
        title={invitationSent ? "¡Gracias por registrarte!" : "Crea tu cuenta"}
      />

      {invitationSent ? (
        <InvitationSent onResendInvitation={handleResendInvitation} />
      ) : (
        <>
          <SignupHolder
            onSubmit={async (values) => {
              console.log(values);
              setInvitationSent(true);
            }}
          />
        </>
      )}
    </Stack>
  );
};

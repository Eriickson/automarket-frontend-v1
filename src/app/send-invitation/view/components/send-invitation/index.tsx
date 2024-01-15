"use client";

import React, { useState } from "react";

import { Stack, useToast } from "@chakra-ui/react";

import { ContinueWithSocialMediaButtons } from "@/app/signin/view/components";
import { OrDivider } from "@/components/atoms/OrDivider";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { InvitationSent } from "../invitation-sent";
import { SendInvitationHolder } from "./send-invitation-form-holder";

export const SendInvitationFormContainer = () => {
  const toast = useToast();
  const [invitationSent, setInvitationSent] = useState(false);

  async function handleResendInvitation() {}

  return (
    <Stack spacing="6">
      <TitleLoginComponent
        description={
          invitationSent
            ? "Te hemos enviado una invitación a tu correo electrónico para que puedas completar tu registro."
            : "Envía una invitación a tu correo electrónico para acceder a los beneficios de la plataforma."
        }
        title={invitationSent ? "¡Gracias por registrarte!" : "Enviar invitación"}
      />

      {invitationSent ? (
        <InvitationSent onResendInvitation={handleResendInvitation} />
      ) : (
        <>
          <SendInvitationHolder
            onSubmit={async (values) => {
              console.log(values);
              toast({
                title: "Invitación enviada",
                description: "Se ha enviado una invitación a tu correo electrónico",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }}
          />
          <OrDivider />
          <ContinueWithSocialMediaButtons />
        </>
      )}
    </Stack>
  );
};

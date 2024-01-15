import React from "react";

import { Stack } from "@chakra-ui/react";

import { ContinueWithSocialMediaButtons } from "@/app/signin/view/components";
import { OrDivider } from "@/components/atoms/OrDivider";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

export const SignupView = () => {
  return (
    <ScreenAreaDelimiter maxWidth="480">
      <Stack spacing="6">
        <TitleLoginComponent
          description="Crea tu cuenta para poder acceder a todos los beneficios de la plataforma."
          title="Crea tu cuenta"
        />
        <OrDivider />
        <ContinueWithSocialMediaButtons />
      </Stack>
    </ScreenAreaDelimiter>
  );
};

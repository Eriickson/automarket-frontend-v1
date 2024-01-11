import React from "react";

import { Stack } from "@chakra-ui/react";

import { OrDivider } from "@/components/atoms/OrDivider";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { ContinueWithSocialMediaButtons, SigninFormContainer } from "./components";

export const SigninView = () => {
  return (
    <ScreenAreaDelimiter maxWidth="480">
      <Stack spacing="6">
        <TitleLoginComponent
          description="Bienvenido de nuevo! Selecciona el método que deseas utilizar para ingresar a tu cuenta."
          title="Ingrese a su cuenta"
        />
        <SigninFormContainer />
        <OrDivider />
        <ContinueWithSocialMediaButtons />
      </Stack>
    </ScreenAreaDelimiter>
  );
};

import React from "react";

import { Heading, Stack, Text, VStack } from "@chakra-ui/react";

import { OrDivider } from "@/components/atoms/OrDivider";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { generateNull } from "@/utils";

import { ContinueWithSocialMediaButtons } from "./components/ContinueWithSocialMediaButtons";
import { SigninFormContainer } from "./components/SigninForm/SigninFormContainer";

export const SigninView = () => {
  return (
    <ScreenAreaDelimiter maxWidth="480">
      <Stack spacing="6">
        <VStack spacing="1">
          <Heading as="h2" fontWeight="semibold" size={["lg", ...generateNull(5), "xl"]} textAlign="center">
            Ingrese a su cuenta
          </Heading>
          <Text fontSize={["xs", null, "md"]} lineHeight={["1.3"]} maxW={["80", null, "96"]} textAlign="center">
            Bienvenido de nuevo! Selecciona el método que deseas utilizar para ingresar a tu cuenta.
          </Text>
        </VStack>
        <SigninFormContainer />
        <OrDivider />
        <ContinueWithSocialMediaButtons />
      </Stack>
    </ScreenAreaDelimiter>
  );
};

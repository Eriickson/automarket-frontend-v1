import React from "react";

import { Box, Center, Stack } from "@chakra-ui/react";

import { ContinueWithSocialMediaButtons } from "@/app/signin/view/components";
import { StepIndicatorLine } from "@/components/atoms";
import { OrDivider } from "@/components/atoms/OrDivider";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { CreateAnAccountContainer } from "./components/CreateAnAccount";

export const CreateAndAccountView = () => {
  return (
    <Stack h="full">
      <Box></Box>
      <Center flex="1">
        <ScreenAreaDelimiter maxWidth="640">
          <Stack spacing="6">
            <TitleLoginComponent
              description="Crea tu cuenta para poder acceder a todos los beneficios que tenemos para ti."
              title="Crea tu cuenta"
            />
            <CreateAnAccountContainer />
            <OrDivider />
            <ContinueWithSocialMediaButtons />
          </Stack>
        </ScreenAreaDelimiter>
      </Center>
      <Box pb="4">
        <ScreenAreaDelimiter maxWidth="480">
          <StepIndicatorLine currentStep={1} totalSteps={3} />
        </ScreenAreaDelimiter>
      </Box>
    </Stack>
  );
};

import React from "react";

import { Box, Center, Stack } from "@chakra-ui/react";

import { StepIndicatorLine } from "@/components/atoms";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

export const CreateAndAccountView = () => {
  return (
    <Stack h="full">
      <Box></Box>
      <Center flex="1">
        <ScreenAreaDelimiter maxWidth="480">
          <TitleLoginComponent
            description="Crea tu cuenta para poder acceder a todos los beneficios que tenemos para ti."
            title="Crea tu cuenta"
          />
        </ScreenAreaDelimiter>
      </Center>
      <Box minW="xl">
        <ScreenAreaDelimiter maxWidth="480">
          <StepIndicatorLine currentStep={1} totalSteps={3} />
        </ScreenAreaDelimiter>
      </Box>
    </Stack>
  );
};

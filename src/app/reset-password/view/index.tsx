import React from "react";

import { Stack, Text } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { StepIndicatorLine } from "@/components/atoms/StepIndicatorLine";

export const ResetPasswordView = () => {
  return (
    <Stack h="full" spacing="6" w="full">
      <ScreenAreaDelimiter maxWidth="480">
        <Text>Reset Password</Text>
      </ScreenAreaDelimiter>
      <ScreenAreaDelimiter maxWidth="480">
        <StepIndicatorLine currentStep={2} totalSteps={5} />
      </ScreenAreaDelimiter>
    </Stack>
  );
};

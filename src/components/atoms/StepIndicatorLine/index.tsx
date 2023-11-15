import React, { FC } from "react";

import { Box, HStack } from "@chakra-ui/react";

interface StepIndicatorLineProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicatorLine: FC<StepIndicatorLineProps> = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <HStack spacing="4">
      {steps.map((step) => (
        <Box
          bgColor={currentStep === step ? "#165ef0" : "#e6e7eb"}
          flex="1"
          h="2"
          key={step}
          rounded="full"
          transition="150ms"
        />
      ))}
    </HStack>
  );
};

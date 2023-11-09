import { Box, HStack } from "@chakra-ui/react";
import React, { FC } from "react";

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
          transition="150ms"
          key={step}
          h="2"
          bgColor={currentStep === step ? "#165ef0" : "#e6e7eb"}
          flex="1"
          rounded="full"
        />
      ))}
    </HStack>
  );
};

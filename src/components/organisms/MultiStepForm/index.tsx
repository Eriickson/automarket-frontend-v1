import React, { FC, useState } from "react";

import { Box, Stack } from "@chakra-ui/react";

import { StepIndicatorLine } from "@/components/atoms";

import "swiper/css";
import { MultiFormStepTitle } from "./MultiFormStepTitle";

export interface MultiStepFormItemComponentProps {
  nextStep(): void;
  prevStep(): void;
}

export interface MultiStepFormItem {
  title: string;
  description: string;
  component: FC<MultiStepFormItemComponentProps>;
}

interface MultiStepFormProps {
  steps: MultiStepFormItem[];
}

export const MultiStepForm: FC<MultiStepFormProps> = ({ steps }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  function nextStep() {
    setCurrentSlider((prev) => prev + 1);
  }

  function prevStep() {
    setCurrentSlider((prev) => prev - 1);
  }

  return (
    <Box w="xl">
      <Stack spacing="12">
        {steps.map((step, index) => (
          <Stack
            display={currentSlider === index ? "flex" : "none"}
            id={`slider-${index + index}`}
            key={index}
            spacing="8"
          >
            <MultiFormStepTitle description={step.description} title={step.title} />
            <step.component nextStep={nextStep} prevStep={prevStep} />
          </Stack>
        ))}
        <StepIndicatorLine currentStep={currentSlider} totalSteps={steps.length} />
      </Stack>
    </Box>
  );
};

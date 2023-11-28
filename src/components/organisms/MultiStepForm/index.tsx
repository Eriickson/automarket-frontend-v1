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
    <Box>
      <Stack spacing="12">
        {steps.map((step, index) => (
          <Box display={currentSlider === index ? "block" : "none"} id={`slider-${index + index}`} key={index}>
            <MultiFormStepTitle description={step.description} title={step.title} />
            <Box>
              <step.component nextStep={nextStep} prevStep={prevStep} />
            </Box>
          </Box>
        ))}
        <StepIndicatorLine currentStep={currentSlider} totalSteps={steps.length} />
      </Stack>
    </Box>
  );
};

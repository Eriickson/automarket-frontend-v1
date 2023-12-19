import React, { FC, useMemo, useState } from "react";

import { Box, Stack } from "@chakra-ui/react";

import { StepIndicatorLine } from "@/components/atoms";

import "swiper/css";
import { MultiFormStepTitle } from "./MultiFormStepTitle";

export interface MultiStepFormItemComponentProps<T = unknown> {
  nextStep(): void;
  prevStep(): void;
  values: Partial<T>;
  addInformation(values: Partial<T>): void;
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
  const [currentIndex, setCurrentIndex] = useState(3);
  const [values, setValues] = useState({});

  const currentStep = useMemo(() => steps[currentIndex], [steps, currentIndex]);

  function nextStep() {
    setCurrentIndex((prev) => prev + 1);
  }

  function prevStep() {
    setCurrentIndex((prev) => prev - 1);
  }

  function addInformation(values: any) {
    setValues((prev) => ({ ...prev, ...values }));
  }

  return (
    <Box w="xl">
      <Stack spacing="12">
        <Stack spacing="8">
          <MultiFormStepTitle description={currentStep.description} title={currentStep.title} />
          <currentStep.component
            addInformation={addInformation}
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
          />
        </Stack>
        <StepIndicatorLine currentStep={currentIndex} totalSteps={steps.length} />
      </Stack>
    </Box>
  );
};

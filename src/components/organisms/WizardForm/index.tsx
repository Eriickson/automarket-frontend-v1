"use client";
import React, { FC, Fragment, useMemo, useState } from "react";

import { Box, Center, HStack, Stack, Text } from "@chakra-ui/react";

import { Check, ChevronRight } from "react-feather";

export interface WizardFormItemComponentProps<T = unknown> {
  nextStep(): void;
  prevStep(): void;
  values: Partial<T>;
  addInformation(values: Partial<T>): void;
}

export interface WizardFormItem {
  title: string;
  component: FC<WizardFormItemComponentProps>;
}

interface WizardFormProps {
  steps: WizardFormItem[];
  maxW?: string;
}

export const WizardForm: FC<WizardFormProps> = ({ steps, maxW }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <Box>
      <Stack spacing="6">
        <HStack spacing="6">
          {steps.map((step, index) => {
            const isCurrent = index === currentIndex;
            const isPassed = index < currentIndex;

            return (
              <Fragment key={index}>
                {index === 0 ? null : <ChevronRight size="1rem" strokeWidth="3" />}
                <HStack>
                  <Center
                    bgColor={isCurrent || isPassed ? "primary.500" : "white"}
                    borderWidth="1px"
                    color={isCurrent || isPassed ? "white" : "black"}
                    h="10"
                    rounded="full"
                    shadow="md"
                    w="10"
                  >
                    {isPassed ? (
                      <Check size="1.25rem" strokeWidth="3" />
                    ) : (
                      <Text as="b" fontSize="lg">
                        {index + 1}
                      </Text>
                    )}
                  </Center>
                  <Text as="b" color={isCurrent ? "primary.600" : "black"}>
                    {step.title}
                  </Text>
                </HStack>
              </Fragment>
            );
          })}
        </HStack>
        <Box>
          <Box maxW={maxW}>
            <currentStep.component
              addInformation={addInformation}
              nextStep={nextStep}
              prevStep={prevStep}
              values={values}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

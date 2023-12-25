import React, { FC, Fragment, useMemo, useState } from "react";

import { Box, Center, HStack, Stack, Text } from "@chakra-ui/react";

import { ChevronRight } from "react-feather";

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
}

export const WizardForm: FC<WizardFormProps> = ({ steps }) => {
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
          {steps.map((step, index) => (
            <Fragment key={index}>
              {index === 0 ? null : <ChevronRight size="1rem" strokeWidth="3" />}
              <HStack>
                <Center bgColor="primary.500" color="white" h="10" rounded="full" w="10">
                  <Text as="b">{index + 1}</Text>
                </Center>
                <Text as="b">{step.title}</Text>
              </HStack>
            </Fragment>
          ))}
        </HStack>
        <Box>
          <currentStep.component
            addInformation={addInformation}
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
          />
        </Box>
      </Stack>
    </Box>
  );
};

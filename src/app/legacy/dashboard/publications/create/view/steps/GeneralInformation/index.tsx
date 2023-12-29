import React, { FC, useId } from "react";

import { Box, Stack } from "@chakra-ui/react";

import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

import { ControllersStep } from "../ControllersStep";
import { GeneralInformationForm } from "./form";

interface GeneralInformationStepProps extends WizardFormItemComponentProps {}

export const GeneralInformationStep: FC<GeneralInformationStepProps> = ({ nextStep, prevStep }) => {
  const formId = useId();

  async function handleSubmit(data: any) {
    console.log(data);
    nextStep();
  }

  return (
    <Stack spacing={4}>
      <Box>
        <GeneralInformationForm id={formId} onSubmit={handleSubmit} />
      </Box>
      <ControllersStep disablePrevStep formId={formId} onPrevStep={prevStep} />
    </Stack>
  );
};

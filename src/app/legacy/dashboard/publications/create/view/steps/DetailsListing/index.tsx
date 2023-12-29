import React, { FC, useId } from "react";

import { Stack } from "@chakra-ui/react";

import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

import { ControllersStep } from "../ControllersStep";
import { DetailsListingForm } from "./form";

interface DetailsListingStepProps extends WizardFormItemComponentProps {}

export const DetailsListingStep: FC<DetailsListingStepProps> = ({ nextStep, prevStep }) => {
  const formId = useId();

  async function handleSubmit() {
    nextStep();
  }

  return (
    <Stack spacing={4}>
      <DetailsListingForm id={formId} onSubmit={handleSubmit} />
      <ControllersStep formId={formId} onPrevStep={prevStep} />
    </Stack>
  );
};

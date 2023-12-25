import React, { FC, useId } from "react";

import { Stack } from "@chakra-ui/react";

import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

import { ControllersStep } from "../ControllersStep";

interface DetailsListingStepProps extends WizardFormItemComponentProps {}

export const DetailsListingStep: FC<DetailsListingStepProps> = ({ nextStep, prevStep }) => {
  const formId = useId();

  return (
    <Stack spacing={4}>
      <ControllersStep formId={formId} onPrevStep={prevStep} />
    </Stack>
  );
};

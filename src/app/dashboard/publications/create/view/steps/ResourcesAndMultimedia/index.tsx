import React, { FC, useId } from "react";

import { Stack } from "@chakra-ui/react";

import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

import { ControllersStep } from "../ControllersStep";
import { ResourcesAndMultimediaForm } from "./form";

export interface ResourcesAndMultimediaStepProps extends WizardFormItemComponentProps {}

export const ResourcesAndMultimediaStep: FC<ResourcesAndMultimediaStepProps> = ({ nextStep, prevStep }) => {
  const formId = useId();

  async function handleSubmit() {
    nextStep();
  }
  return (
    <Stack spacing={4}>
      <ResourcesAndMultimediaForm id={formId} onSubmit={handleSubmit} />
      <ControllersStep formId={formId} onPrevStep={prevStep} />
    </Stack>
  );
};

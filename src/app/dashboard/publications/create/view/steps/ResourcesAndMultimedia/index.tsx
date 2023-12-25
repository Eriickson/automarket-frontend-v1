import React, { FC, useId } from "react";

import { Box } from "@chakra-ui/react";

import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

import { ResourcesAndMultimediaForm } from "./form";

export interface ResourcesAndMultimediaStepProps extends WizardFormItemComponentProps {}

export const ResourcesAndMultimediaStep: FC<ResourcesAndMultimediaStepProps> = ({ nextStep }) => {
  const formId = useId();

  async function handleSubmit() {
    nextStep();
  }
  return (
    <Box>
      <ResourcesAndMultimediaForm id={formId} onSubmit={handleSubmit} />
    </Box>
  );
};

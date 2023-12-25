import React, { FC, useId } from "react";

import { Box } from "@chakra-ui/react";

import { WizardFormItemComponentProps } from "@/components/organisms/WizardForm";

import { ConfirmDataForm } from "./form";

interface ConfirmDataStepProps extends WizardFormItemComponentProps {}

export const ConfirmDataStep: FC<ConfirmDataStepProps> = ({ nextStep }) => {
  const formId = useId();

  async function handleSubmit() {
    nextStep();
  }

  return (
    <Box>
      <ConfirmDataForm id={formId} onSubmit={handleSubmit} />
    </Box>
  );
};

import React, { FC } from "react";

import { Button } from "@/components/atoms";
import { MultiStepFormItemComponentProps } from "@/components/organisms";

interface ValidateInformationStepProps extends MultiStepFormItemComponentProps {}
export const ValidateInformationStep: FC<ValidateInformationStepProps> = ({ nextStep }) => {
  async function handleCreateAccount() {
    nextStep();
  }

  return (
    <div>
      <Button colorScheme="primary" w="full" onClick={handleCreateAccount}>
        Crear mi cuenta
      </Button>
    </div>
  );
};

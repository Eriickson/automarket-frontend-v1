import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import { ValidateInvitationCodeForm } from "./form";
import { ValidateInvitationCodeFormType } from "./form/schema";

interface ValidateInvitationCodeStepProps extends MultiStepFormItemComponentProps {}

export const ValidateInvitationCodeStep: FC<ValidateInvitationCodeStepProps> = ({ nextStep }) => {
  async function handleSubmit(values: ValidateInvitationCodeFormType) {
    console.log(values);
    nextStep();
  }

  return <ValidateInvitationCodeForm onSubmit={handleSubmit} />;
};

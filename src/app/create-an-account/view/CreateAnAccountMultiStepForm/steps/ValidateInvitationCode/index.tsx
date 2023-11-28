import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import { CreateAnAccountMultiStepFormType } from "../../CreateAnAccountMultiStepForm.type";
import { ValidateInvitationCodeForm } from "./form";
import { ValidateInvitationCodeFormType } from "./form/schema";

interface ValidateInvitationCodeStepProps extends MultiStepFormItemComponentProps<CreateAnAccountMultiStepFormType> {}

export const ValidateInvitationCodeStep: FC<ValidateInvitationCodeStepProps> = ({ nextStep, addInformation }) => {
  async function handleSubmit(values: ValidateInvitationCodeFormType) {
    console.log(values);
    nextStep();
    addInformation({ validateInvitationCode: values });
  }

  return <ValidateInvitationCodeForm onSubmit={handleSubmit} />;
};

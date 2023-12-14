import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";
import { authApi } from "@/store/features/api/auth";

import { CreateAnAccountMultiStepFormType } from "../../CreateAnAccountMultiStepForm.type";
import { ValidateInvitationCodeForm } from "./form";
import { ValidateInvitationCodeFormType } from "./form/schema";

interface ValidateInvitationCodeStepProps extends MultiStepFormItemComponentProps<CreateAnAccountMultiStepFormType> {}

export const ValidateInvitationCodeStep: FC<ValidateInvitationCodeStepProps> = ({
  nextStep,
  addInformation,
  values: information,
}) => {
  const [verifyInvitationCodeMutation] = authApi.useVerifyInvitationCodeMutation();

  async function handleSubmit(values: ValidateInvitationCodeFormType) {
    const { email } = information.registerPersonalInformation!;

    const response = await verifyInvitationCodeMutation({ queryParams: { email, code: values.invitationCode } });

    if ("error" in response) return;

    addInformation({
      validateInvitationCode: {
        ...values,
        registrationToken: response.data.data.token,
      },
    });

    nextStep();
  }

  return <ValidateInvitationCodeForm onSubmit={handleSubmit} />;
};

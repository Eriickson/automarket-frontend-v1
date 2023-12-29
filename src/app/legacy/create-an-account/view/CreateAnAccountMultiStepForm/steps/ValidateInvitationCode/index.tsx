import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";
import { authApi } from "@/store/features/api/auth";

import { useHandleErrors } from "@/hooks";

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
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: ValidateInvitationCodeFormType) {
    const { email } = information.registerPersonalInformation!;

    const response = await verifyInvitationCodeMutation({ queryParams: { email, code: values.invitationCode } });

    if ("error" in response) return handleErrors(response);

    addInformation({
      validateInvitationCode: {
        ...values,
        registrationToken: response.data.data!.registrationToken,
      },
    });

    nextStep();
  }

  return <ValidateInvitationCodeForm onSubmit={handleSubmit} />;
};

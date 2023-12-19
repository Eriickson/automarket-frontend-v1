import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";
import { authApi } from "@/store/features/api/auth";

import { useHandleErrors } from "@/hooks";

import { RecoverYourPasswordType } from "../../RecoverYourPassword.type";
import { SendPasswordRecoveryRequestForm } from "./form";
import { SendPasswordRecoveryRequestFormType } from "./form/schema";

interface SendPasswordRecoveryRequestProps extends MultiStepFormItemComponentProps<RecoverYourPasswordType> {}

export const SendPasswordRecoveryRequest: FC<SendPasswordRecoveryRequestProps> = ({ nextStep, addInformation }) => {
  const [initializePasswordResetQuery] = authApi.useInitializePasswordResetMutation();
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: SendPasswordRecoveryRequestFormType) {
    const response = await initializePasswordResetQuery({ identifier: values.email, mode: "code" });

    if ("error" in response) return handleErrors(response);

    addInformation({ sendPasswordRecoveryRequest: values });
    nextStep();
  }

  return <SendPasswordRecoveryRequestForm defaultValues={{ email: "erickson01d@gmail.com" }} onSubmit={handleSubmit} />;
};

import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";
import { authApi } from "@/store/features/api/auth";

import { useHandleErrors } from "@/hooks";

import { RecoverYourPasswordType } from "../../RecoverYourPassword.type";
import { EnterYourPasswordForm } from "./form";
import { EnterYourNewPasswordFormType } from "./form/schema";

interface EnterYourNewPasswordProps extends MultiStepFormItemComponentProps<RecoverYourPasswordType> {}

export const EnterYourNewPassword: FC<EnterYourNewPasswordProps> = ({ nextStep, values: information }) => {
  const [resetPasswordMutation] = authApi.useResetPasswordMutation();
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: EnterYourNewPasswordFormType) {
    const response = await resetPasswordMutation({
      data: values,
      headers: { "x-password-reset-token": information.validateCode!.passwordResetToken },
    });

    if ("error" in response) return handleErrors(response);
    nextStep();
  }

  return <EnterYourPasswordForm onSubmit={handleSubmit} />;
};

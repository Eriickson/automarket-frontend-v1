import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";
import { authApi } from "@/store/features/api/auth";

import { RecoverYourPasswordType } from "../../RecoverYourPassword.type";
import { ValidateCodeForm } from "./form";
import { ValidateCodeFormType } from "./form/schema";

interface ValidateCodeProps extends MultiStepFormItemComponentProps<RecoverYourPasswordType> {}

export const ValidateCode: FC<ValidateCodeProps> = ({ nextStep, addInformation, values: information }) => {
  const [verifyPasswordResetRequestQuery] = authApi.useLazyVerifyPasswordResetRequestQuery();

  async function handleSubmit(values: ValidateCodeFormType) {
    const response = await verifyPasswordResetRequestQuery({
      queryParams: { code: values.passwordResetCode, identifier: information.sendPasswordRecoveryRequest!.email },
    });


    if (!response.data) {
      return;
    }

    addInformation({
      validateCode: {
        passwordResetCode: values.passwordResetCode,
        passwordResetToken: response.data.data!.passwordResetToken,
      },
    });

    nextStep();
  }

  return <ValidateCodeForm onSubmit={handleSubmit} />;
};

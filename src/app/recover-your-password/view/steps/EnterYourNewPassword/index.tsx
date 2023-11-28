import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import delay from "delay";

import { EnterYourPasswordForm } from "./form";
import { EnterYourNewPasswordFormType } from "./form/schema";

interface EnterYourNewPasswordProps extends MultiStepFormItemComponentProps {}

export const EnterYourNewPassword: FC<EnterYourNewPasswordProps> = ({ nextStep }) => {
  async function handleSubmit(data: EnterYourNewPasswordFormType) {
    await delay(1000);
    nextStep();
  }

  return <EnterYourPasswordForm onSubmit={handleSubmit} />;
};

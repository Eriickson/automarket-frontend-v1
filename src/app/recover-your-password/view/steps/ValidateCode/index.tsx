import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import delay from "delay";

import { ValidateCodeForm } from "./form";
import { ValidateCodeFormType } from "./form/schema";

interface ValidateCodeProps extends MultiStepFormItemComponentProps {}

export const ValidateCode: FC<ValidateCodeProps> = ({ nextStep }) => {
  async function handleSubmit(data: ValidateCodeFormType) {
    await delay(1000);
    nextStep();
  }

  return <ValidateCodeForm onSubmit={handleSubmit} />;
};

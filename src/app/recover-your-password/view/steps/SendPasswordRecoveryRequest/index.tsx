import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import delay from "delay";

import { SendPasswordRecoveryRequestForm } from "./form";
import { SendPasswordRecoveryRequestFormType } from "./form/schema";

interface SendPasswordRecoveryRequestProps extends MultiStepFormItemComponentProps {}

export const SendPasswordRecoveryRequest: FC<SendPasswordRecoveryRequestProps> = ({ nextStep }) => {
  async function handleSubmit(data: SendPasswordRecoveryRequestFormType) {
    await delay(1000);
    nextStep();
  }

  return <SendPasswordRecoveryRequestForm defaultValues={{ email: "erickson01d@gmail.com" }} onSubmit={handleSubmit} />;
};

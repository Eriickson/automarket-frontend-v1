import React, { FC } from "react";

import delay from "delay";

import { SendPasswordRecoveryRequestForm } from "./form";

interface SendPasswordRecoveryRequestProps {}

export const SendPasswordRecoveryRequest: FC<SendPasswordRecoveryRequestProps> = () => {
  async function handleSubmit() {
    await delay(1000);
  }

  return <SendPasswordRecoveryRequestForm defaultValues={{ email: "erickson01d@gmail.com" }} onSubmit={handleSubmit} />;
};

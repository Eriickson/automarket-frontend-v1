import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import { CreateAnAccountMultiStepFormType } from "../../CreateAnAccountMultiStepForm.type";
import { CreateAnAgencyForm } from "./form";
import { RegisterAgencyFormType } from "./form/schema";

interface CreateAnAgencyStepProps extends MultiStepFormItemComponentProps<CreateAnAccountMultiStepFormType> {}

export const CreateAnAgencyStep: FC<CreateAnAgencyStepProps> = ({ nextStep }) => {
  async function handleSubmit(values: RegisterAgencyFormType) {
    console.log(values);
  }

  return <CreateAnAgencyForm onSubmit={handleSubmit} />;
};

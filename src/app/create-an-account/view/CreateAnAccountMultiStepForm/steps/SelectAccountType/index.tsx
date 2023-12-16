import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import { CreateAnAccountMultiStepFormType } from "../../CreateAnAccountMultiStepForm.type";
import { SelectAccountTypeForm } from "./form";
import { SelectAccountTypeFormType } from "./form/schema";

interface CreateAnAgencyStepProps extends MultiStepFormItemComponentProps<CreateAnAccountMultiStepFormType> {}

export const SelectAccountTypeStep: FC<CreateAnAgencyStepProps> = ({ addInformation, nextStep }) => {
  async function handleSubmit(values: SelectAccountTypeFormType) {
    addInformation({ selectAccountType: values });
    nextStep();
  }

  return <SelectAccountTypeForm onSubmit={handleSubmit} />;
};

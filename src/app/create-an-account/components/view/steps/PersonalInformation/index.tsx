import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import { PersonalInformationForm } from "./form";
import { RegisterPersonalInformationFormType } from "./form/schema";

interface RegisterPersonalInformationStepProps extends MultiStepFormItemComponentProps {}

export const RegisterPersonalInformationStep: FC<RegisterPersonalInformationStepProps> = ({ nextStep }) => {
  async function handleSubmit(values: RegisterPersonalInformationFormType) {
    console.log(values);
    nextStep();
  }

  return (
    <PersonalInformationForm
      defaultValues={{
        fullname: "Jorge Luis",
        birthday: "03/11/1999",
        email: "user06@gmail.com",
        username: "user06",
        password: "12345678Ee.",
        confirmPassword: "12345678Ee.",
      }}
      onSubmit={handleSubmit}
    />
  );
};

import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";

import { CreateAnAccountMultiStepFormType } from "../../CreateAnAccountMultiStepForm.type";
import { PersonalInformationForm } from "./form";
import { RegisterPersonalInformationFormType } from "./form/schema";

interface RegisterPersonalInformationStepProps
  extends MultiStepFormItemComponentProps<CreateAnAccountMultiStepFormType> {}

export const RegisterPersonalInformationStep: FC<RegisterPersonalInformationStepProps> = ({
  nextStep,
  addInformation,
}) => {
  async function handleSubmit(values: RegisterPersonalInformationFormType) {
    addInformation({ registerAgency: values });
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

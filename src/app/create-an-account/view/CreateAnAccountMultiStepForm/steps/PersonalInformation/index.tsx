import React, { FC } from "react";

import { MultiStepFormItemComponentProps } from "@/components/organisms";
import { authApi } from "@/store/features/api/auth";

import { useHandleErrors } from "@/hooks";

import { CreateAnAccountMultiStepFormType } from "../../CreateAnAccountMultiStepForm.type";
import { PersonalInformationForm } from "./form";
import { RegisterPersonalInformationFormType } from "./form/schema";

interface RegisterPersonalInformationStepProps
  extends MultiStepFormItemComponentProps<CreateAnAccountMultiStepFormType> {}

export const RegisterPersonalInformationStep: FC<RegisterPersonalInformationStepProps> = ({
  nextStep,
  addInformation,
}) => {
  const [sendInvitationCodeMutation] = authApi.useSendInvitationCodeMutation();
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: RegisterPersonalInformationFormType) {
    const response = await sendInvitationCodeMutation({ data: { email: values.email } });

    if ("error" in response) return handleErrors(response);

    if (response.data.status === "success") {
      addInformation({ registerPersonalInformation: values });
      nextStep();
    }
  }

  return (
    <PersonalInformationForm
      defaultValues={{
        fullname: "Jorge Luis",
        birthdate: "03/11/1999",
        email: "user03@gmail.com",
        password: "12345678Ee.",
        passwordConfirmation: "12345678Ee.",
      }}
      onSubmit={handleSubmit}
    />
  );
};

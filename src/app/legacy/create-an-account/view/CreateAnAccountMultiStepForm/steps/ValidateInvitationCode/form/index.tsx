import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { CodeVerificationFieldController, SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, ValidateInvitationCodeFormType } from "./schema";

interface ValidateInvitationCodeFromProps extends FormComponentProps<ValidateInvitationCodeFormType> {}

export const ValidateInvitationCodeForm: FC<ValidateInvitationCodeFromProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider({ defaultValues, resolver });
  return (
    <FormProvider onSubmit={onSubmit}>
      <CodeVerificationFieldController label="" name="invitationCode" />
      <SubmitButton colorScheme="primary" loadingText="Validando código de invitación" mt="4">
        Validar código de invitación
      </SubmitButton>
    </FormProvider>
  );
};

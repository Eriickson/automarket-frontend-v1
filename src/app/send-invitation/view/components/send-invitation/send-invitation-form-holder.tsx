import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { SimpleTextFieldController, SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, SendInvitationFormValuesType } from "./schema";

interface SendInvitationHolderProps extends FormComponentProps<SendInvitationFormValuesType> {}

export const SendInvitationHolder: FC<SendInvitationHolderProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<SendInvitationFormValuesType>({ resolver, defaultValues });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController
        autoComplete="username"
        bgColor="gray.50"
        borderColor="gray.300"
        label="Correo electrónico"
        name="email"
        placeholder="Ingresa tu correo electrónico"
      />
      <SubmitButton colorScheme="primary" loadingText="Enviando invitación..." mt="4">
        Enviar invitación
      </SubmitButton>
    </FormProvider>
  );
};

import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { SimpleTextFieldController } from "@/components/atoms";
import { SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, SendPasswordRecoveryRequestFormType } from "./schema";

interface SendPasswordRecoveryRequestFormProps extends FormComponentProps<SendPasswordRecoveryRequestFormType> {}

export const SendPasswordRecoveryRequestForm: FC<SendPasswordRecoveryRequestFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const { FormProvider } = useFormProvider<SendPasswordRecoveryRequestFormType>({ resolver, defaultValues });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController
        autoFocus
        autoComplete="email"
        label="Correo electrónico"
        name="email"
        placeholder="Ingresa tu correo electrónico"
      />

      <SubmitButton colorScheme="primary" loadingText="Enviando código de recuperación..." mt="4">
        Enviar código de recuperación
      </SubmitButton>
    </FormProvider>
  );
};

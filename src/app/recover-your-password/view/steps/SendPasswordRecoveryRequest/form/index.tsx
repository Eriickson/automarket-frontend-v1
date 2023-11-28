import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Button, SimpleTextFieldController } from "@/components/atoms";

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

      <Button colorScheme="primary" loadingText="Validando" mt="4" py="6" type="submit" w="full">
        Enviar código de recuperación
      </Button>
    </FormProvider>
  );
};

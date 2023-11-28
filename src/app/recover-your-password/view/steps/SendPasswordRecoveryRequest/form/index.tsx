import React, { FC } from "react";

import { Button, SimpleTextFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

interface SendPasswordRecoveryRequestFormProps {
  onSubmit: () => Promise<void>;
}

export const SendPasswordRecoveryRequestForm: FC<SendPasswordRecoveryRequestFormProps> = ({ onSubmit }) => {
  const { FormProvider } = useFormProvider({});
  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController
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

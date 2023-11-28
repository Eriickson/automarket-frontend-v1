import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Button, PasswordFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { EnterYourNewPasswordFormType, resolver } from "./schema";

interface EnterYourPasswordFormProps extends FormComponentProps<EnterYourNewPasswordFormType> {}

export const EnterYourPasswordForm: FC<EnterYourPasswordFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<EnterYourNewPasswordFormType>({ defaultValues, resolver });

  return (
    <FormProvider onSubmit={onSubmit}>
      <PasswordFieldController
        autoComplete="new-password"
        label="Nueva contraseña"
        name="newPassword"
        placeholder="Ingresa tu contraseña"
      />
      <PasswordFieldController
        autoComplete="new-password"
        label="Confirmar contraseña"
        name="passwordConfirmation"
        placeholder="Ingresa tu contraseña"
      />
      <Button color="white" colorScheme="primary" py="6" type="submit" w="full">
        Restablecer contraseña
      </Button>
    </FormProvider>
  );
};

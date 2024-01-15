import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { HStack } from "@chakra-ui/react";

import {
  PasswordFieldController,
  SimpleTextFieldController,
  SubmitButton,
  TextDateFieldController,
} from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, SignupFormValuesType } from "./schema";

interface SignupHolderProps extends FormComponentProps<SignupFormValuesType> {}

export const SignupHolder: FC<SignupHolderProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<SignupFormValuesType>({ resolver, defaultValues });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController
        autoComplete="username"
        bgColor="gray.50"
        borderColor="gray.300"
        label="Nombre Completo"
        name="fullname"
        placeholder="Ingresa tu nombre completo"
      />
      <TextDateFieldController
        autoComplete="username"
        bgColor="gray.50"
        borderColor="gray.300"
        label="Fecha de Nacimiento"
        name="birthdate"
        placeholder="Día / Mes / Año"
      />
      <SimpleTextFieldController
        autoComplete="username"
        bgColor="gray.50"
        borderColor="gray.300"
        label="Correo electrónico"
        name="email"
        placeholder="Ingresa tu correo electrónico"
      />
      <HStack alignItems="flex-start" spacing="2">
        <PasswordFieldController
          autoComplete="new-password"
          bgColor="gray.50"
          borderColor="gray.300"
          label="Contraseña"
          name="password"
          placeholder="Ingresa tu contraseña"
        />
        <PasswordFieldController
          autoComplete="new-password"
          bgColor="gray.50"
          borderColor="gray.300"
          label="Confirmar Contraseña"
          name="passwordConfirmation"
          placeholder="Ingresa tu contraseña"
        />
      </HStack>
      <SubmitButton colorScheme="primary" loadingText="Enviando código de invitación..." mt="4">
        Crear mi cuenta
      </SubmitButton>
    </FormProvider>
  );
};

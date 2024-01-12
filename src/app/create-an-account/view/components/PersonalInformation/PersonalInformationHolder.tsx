import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, HStack } from "@chakra-ui/react";

import {
  PasswordFieldController,
  SimpleTextFieldController,
  SubmitButton,
  TextDateFieldController,
} from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { PersonalInformationFormValuesType, resolver } from "./schema";

interface PersonalInformationHolderProps extends FormComponentProps<PersonalInformationFormValuesType> {}

export const PersonalInformationHolder: FC<PersonalInformationHolderProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<PersonalInformationFormValuesType>({ resolver, defaultValues });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController
        autoComplete="username"
        bgColor="gray.50"
        borderColor="gray.300"
        label="Nombre Completo"
        name="fullname"
        placeholder="John Doe"
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
        placeholder="Correo electrónico"
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
        Enviar código de invitación
      </SubmitButton>
    </FormProvider>
  );
};

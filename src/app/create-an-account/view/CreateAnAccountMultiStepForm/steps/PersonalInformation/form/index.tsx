import React, { FC } from "react";

import { HStack, Text } from "@chakra-ui/react";

import {
  PasswordFieldController,
  SimpleTextFieldController,
  SubmitButton,
  TextDateFieldController,
} from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { RegisterPersonalInformationFormType, resolver } from "./schema";
import { useValidateBeforeSubmit } from "./validateBeforeSubmit";

interface PersonalInformationFormProps {
  onSubmit(data: RegisterPersonalInformationFormType): Promise<void>;
  defaultValues?: RegisterPersonalInformationFormType;
}

export const PersonalInformationForm: FC<PersonalInformationFormProps> = ({ onSubmit, defaultValues }) => {
  const { before } = useValidateBeforeSubmit();

  const { FormProvider } = useFormProvider<RegisterPersonalInformationFormType>({
    resolver,
    validateBeforeSubmit: before,
    defaultValues,
  });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SimpleTextFieldController label="Nombre completo" name="fullname" placeholder="Ingresa tu nombre completo" />
      <TextDateFieldController label="Fecha de nacimiento" name="birthday" placeholder="Día / Mes / Año" />
      <SimpleTextFieldController
        autoComplete="email"
        label="Correo electrónico"
        name="email"
        placeholder="Ingresa tu correo electrónico"
      />
      <HStack alignItems="flex-start" spacing="4">
        <PasswordFieldController
          autoComplete="new-password"
          label="Contraseña"
          name="password"
          placeholder="Ingresa tu contraseña"
        />
        <PasswordFieldController
          autoComplete="new-password"
          label="Confirmar Contraseña"
          name="confirmPassword"
          placeholder="Ingresa tu contraseña"
        />
      </HStack>
      <Text color="gray.600" fontSize="sm">
        La contraseña debe tener al menos 8 caracteres conformada por mayúsculas, minúsculas y números.
      </Text>

      <SubmitButton colorScheme="primary" loadingText="Enviando código de invitación..." mt="4">
        Enviar código de invitación
      </SubmitButton>
    </FormProvider>
  );
};

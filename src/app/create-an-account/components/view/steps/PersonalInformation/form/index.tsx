import React, { FC } from "react";

import { FormControl, FormHelperText, HStack } from "@chakra-ui/react";

import {
  Button,
  IconButton,
  PasswordFieldController,
  SelectField,
  SimpleTextFieldController,
  TextDateFieldController,
} from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { ChevronLeft } from "react-feather";

import { RegisterPersonalInformationFormType, resolver } from "./schema";
import { useValidateBeforeSubmit } from "./validateBeforeSubmit";

interface PersonalInformationFormProps {
  onSubmit(data: RegisterPersonalInformationFormType): void;
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
      <SimpleTextFieldController
        autoComplete="username"
        label="Nombre de usuario"
        name="username"
        placeholder="Ingresa tu nombre de usuario"
      />

      <FormControl>
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
        <FormHelperText>
          La contraseña debe tener al menos 8 caracteres conformada por mayúsculas, minúsculas y números.
        </FormHelperText>
      </FormControl>
      <HStack>
        <Button color="white" colorScheme="primary" loadingText="Validando" py="6" type="submit" w="full">
          Enviar código de invitación
        </Button>
      </HStack>
    </FormProvider>
  );
};

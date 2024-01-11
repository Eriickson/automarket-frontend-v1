import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, HStack } from "@chakra-ui/react";

import { PasswordFieldController, SimpleTextFieldController, SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { CreateAnAccountValuesFormType, resolver } from "./schema";

interface CreateAnAccountHolderProps extends FormComponentProps<CreateAnAccountValuesFormType> {}

export const CreateAnAccountHolder: FC<CreateAnAccountHolderProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<CreateAnAccountValuesFormType>({ resolver, defaultValues });

  return (
    <Box w="full">
      <FormProvider onSubmit={onSubmit}>
        <SimpleTextFieldController
          autoComplete="username"
          bgColor="gray.50"
          borderColor="gray.300"
          label="Nombre Completo"
          name="fullname"
          placeholder="John Doe"
        />
        <SimpleTextFieldController
          autoComplete="username"
          bgColor="gray.50"
          borderColor="gray.300"
          label="Fecha de Nacimiento"
          name="email"
          placeholder="Día / Mes / Año"
          type="date"
        />
        <SimpleTextFieldController
          autoComplete="username"
          bgColor="gray.50"
          borderColor="gray.300"
          label="Correo electrónico"
          name="email"
          placeholder="Correo electrónico"
        />
        <HStack alignItems="flex-start" spacing="4">
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
    </Box>
  );
};

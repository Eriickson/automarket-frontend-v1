import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";

import { SubmitButton } from "@/components/atoms";
import { PasswordFieldController } from "@/components/atoms/PasswordField/controller";
import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";

import { useFormProvider } from "@/hooks/useFormProvider";

import { ForgetYourPasswordButton } from "./ForgetYourPasswordButton";
import { resolver, SigninValuesFormType } from "./schema";

interface SigninFormProps extends FormComponentProps<SigninValuesFormType> {}

export const SigninForm: FC<SigninFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider, methods } = useFormProvider<SigninValuesFormType>({ resolver, defaultValues });

  return (
    <Box w="full">
      <FormProvider onSubmit={onSubmit}>
        <SimpleTextFieldController
          autoComplete="username"
          bgColor="gray.50"
          borderColor="gray.300"
          label="Correo electrónico"
          name="identifier"
          placeholder="Correo electrónico o nombre de usuario"
        />
        <PasswordFieldController
          autoComplete="current-password"
          bgColor="gray.50"
          borderColor="gray.300"
          label="Contraseña"
          name="password"
          placeholder="Ingresa tu contraseña"
        />
        <Flex justifyContent="space-between" mb="4">
          <Checkbox {...methods.register("rememberMe")} colorScheme="primary">
            <Text fontWeight="medium">Recuérdame</Text>
          </Checkbox>
          <ForgetYourPasswordButton />
        </Flex>
        <SubmitButton colorScheme="primary" loadingText="Ingresando a tu cuenta">
          <Text fontSize={["sm", null, null, null, null, "md"]}>Ingresar a mi cuenta</Text>
        </SubmitButton>
      </FormProvider>
    </Box>
  );
};

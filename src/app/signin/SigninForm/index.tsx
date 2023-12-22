import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, Button, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";

import { SubmitButton } from "@/components/atoms";
import { PasswordFieldController } from "@/components/atoms/PasswordField/controller";
import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, SigninValuesFormType } from "./schema";
import { Link } from "@chakra-ui/next-js";

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
          <Link href="/recover-your-password">
            <Button _hover={{ textDecoration: "underline" }} color="primary.500" variant="link" w="max-content">
              ¿Olvidaste tu contraseña?
            </Button>
          </Link>
        </Flex>
        <SubmitButton colorScheme="primary" loadingText="Ingresando a tu cuenta">
          Ingresar a mi cuenta
        </SubmitButton>
      </FormProvider>
    </Box>
  );
};

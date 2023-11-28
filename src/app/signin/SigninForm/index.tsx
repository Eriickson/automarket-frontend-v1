import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, Button, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";

import { PasswordFieldController } from "@/components/atoms/PasswordField/controller";
import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";
import { SubmitButton } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, SigninValuesFormType } from "./schema";
import { Link } from "@chakra-ui/next-js";

interface SigninFormProps extends FormComponentProps<SigninValuesFormType> {}

export const SigninForm: FC<SigninFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider, methods } = useFormProvider<SigninValuesFormType>({ resolver, defaultValues });

  return (
    <Box>
      <Box mb="8" textAlign="center">
        <Heading as="h2" fontWeight="semibold" size="xl">
          Bienvenido a automarket
        </Heading>
        <Text>Inicia sesión para comprar, vender y disfrutar de todos los beneficios de nuestra plataforma.</Text>
      </Box>
      <FormProvider onSubmit={onSubmit}>
        <SimpleTextFieldController
          autoComplete="username"
          label="Identificador"
          name="identifier"
          placeholder="Correo electrónico o nombre de usuario"
        />
        <PasswordFieldController
          autoComplete="current-password"
          label="Contraseña"
          name="password"
          placeholder="Ingresa tu contraseña"
        />
        <Flex justifyContent="space-between" mb="4">
          <Checkbox {...methods.register("rememberMe")} colorScheme="primary">
            <Text>Recuérdame</Text>
          </Checkbox>
          <Link href="/recover-your-password">
            <Button _hover={{ textDecoration: "underline" }} color="primary" variant="link" w="max-content">
              ¿Olvidaste tu contraseña?
            </Button>
          </Link>
        </Flex>
        <SubmitButton colorScheme="primary" loadingText="Ingresando a tu cuenta">
          Iniciar sesión
        </SubmitButton>
      </FormProvider>
    </Box>
  );
};

import React from "react";

import { Box, Button, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";

import { PasswordFieldController } from "@/components/atoms/PasswordField/controller";
import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";

import { useFormProvider } from "@/hooks/useFormProvider";

import delay from "delay";

import { signinFormSchemaResolver, SigninFormType } from "./schema";

export const SigninForm = () => {
  const { FormProvider, methods } = useFormProvider<SigninFormType>({
    resolver: signinFormSchemaResolver,
  });

  async function handleSubmit(values: SigninFormType) {
    console.log(values);
  }

  return (
    <Box>
      <Box mb="8" textAlign="center">
        <Heading as="h2" fontWeight="semibold" size="xl">
          Bienvenido a automarket
        </Heading>
        <Text>Inicia sesión para comprar, vender y disfrutar de todos los beneficios de nuestra plataforma.</Text>
      </Box>

      <FormProvider onSubmit={handleSubmit}>
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
          <Button _hover={{ textDecoration: "underline" }} color="primary" variant="link" w="max-content">
            ¿Olvidaste tu contraseña?
          </Button>
        </Flex>
        <Button
          color="white"
          colorScheme="primary"
          isLoading={methods.formState.isSubmitting}
          loadingText="Iniciando sesión"
          py="6"
          type="submit"
          w="full"
        >
          Iniciar sesión
        </Button>
      </FormProvider>
    </Box>
  );
};

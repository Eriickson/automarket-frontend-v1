import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";
import { PasswordFieldController } from "@/components/atoms/PasswordField/controller";
import delay from "delay";
import { SigninFormType, signinFormSchemaResolver } from "./schema";

export const SigninForm = () => {
  const { FormProvider, methods } = useFormProvider<SigninFormType>({ resolver: signinFormSchemaResolver });

  async function handleSubmit(values: SigninFormType) {
    await delay(2500);
    console.log("submit");
    console.log(values);
  }

  return (
    <Box>
      <Box mb="8" textAlign="center">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Bienvenido a automarket
        </Heading>
        <Text>Inicia sesión para comprar, vender y disfrutar de todos los beneficios de nuestra plataforma.</Text>
      </Box>

      <FormProvider onSubmit={handleSubmit}>
        <SimpleTextFieldController
          label="Identificador"
          name="identifier"
          placeholder="Correo electrónico o nombre de usuario"
        />
        <PasswordFieldController label="Contraseña" name="password" placeholder="Ingresa tu contraseña" />
        <Flex mb="4" justifyContent="flex-end">
          <Button w="max-content" variant="link" color="primary" _hover={{ textDecoration: "underline" }}>
            ¿Olvidaste tu contraseña?
          </Button>
        </Flex>
        <Button
          type="submit"
          loadingText="Iniciando sesión"
          isLoading={methods.formState.isSubmitting}
          py="6"
          w="full"
          color="white"
          colorScheme="primary"
        >
          Iniciar sesión
        </Button>
      </FormProvider>
    </Box>
  );
};

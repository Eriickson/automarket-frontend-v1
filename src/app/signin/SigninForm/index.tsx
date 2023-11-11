import React from "react";
import { PasswordField } from "@/components/atoms/PasswordField";
import { SimpleTextField } from "@/components/atoms/SimpleTextField";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

export const SigninForm = () => {
  return (
    <Box>
      <Box mb="8" textAlign="center">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Información personal
        </Heading>
        <Text>Necesitamos algunos datos para crear tu cuenta.</Text>
      </Box>
      <Stack>
        {/* email */}
        <SimpleTextField name="email" placeholder="Ingresa tu correo electrónico" />
        {/* password */}
        <PasswordField name="password" placeholder="Ingresa tu contraseña" />

        <Button type="submit" colorScheme="primary" size="lg" fontSize="md">
          Iniciar sesión
        </Button>
      </Stack>
    </Box>
  );
};

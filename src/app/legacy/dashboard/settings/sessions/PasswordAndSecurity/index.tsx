import React from "react";

import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

export const PasswordAndSecuritySession = () => {
  return (
    <HStack alignItems="flex-start">
      <Box w="2xl">
        <Box mb="4">
          <HStack>
            <Text fontSize="lg" fontWeight="semibold">
              Contraseña y Seguridad
            </Text>
          </HStack>
          <Text fontSize="sm">
            Asegúrate de que tu cuenta tenga las mejores medidas de seguridad <br /> para proteger tu información.
          </Text>
        </Box>
      </Box>
      <Stack flex="1" spacing="4">
        <Box>
          <Text color="gray.600" fontSize="sm">
            Contraseña
          </Text>
          <HStack>
            <Button>Cambiar Contraseña</Button>
            <Button>Restablecer Contraseña</Button>
          </HStack>
        </Box>
      </Stack>
    </HStack>
  );
};

import React, { FC } from "react";

import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

interface ProfileSessionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const ProfileSession: FC<ProfileSessionProps> = ({ children, subtitle, title }) => {
  return (
    <HStack alignItems="flex-start">
      <Box w="2xl">
        <Box mb="4">
          <Text fontSize="lg" fontWeight="semibold">
            {title}
          </Text>
          <Text fontSize="sm">{subtitle}</Text>
        </Box>
        <HStack>
          <Button colorScheme="secondary" rounded="sm">
            Editar esta sección
          </Button>
          {/* <Button rounded="sm">Cancelar</Button>
          <Button colorScheme="primary" rounded="sm">
            Guardar Cambios
          </Button> */}
        </HStack>
      </Box>
      <Stack flex="1" spacing="4">
        {children}
      </Stack>
    </HStack>
  );
};

import React, { FC } from "react";

import { Box, Button, HStack, IconButton, Stack, Text } from "@chakra-ui/react";

import { Edit, Edit3 } from "react-feather";

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
          <HStack>
            <Text fontSize="lg" fontWeight="semibold">
              {title}
            </Text>
            <IconButton aria-label="" rounded="sm" size="xs" variant="ghost">
              <Edit size="16" />
            </IconButton>
          </HStack>
          <Text fontSize="sm">{subtitle}</Text>
        </Box>
        <HStack>
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

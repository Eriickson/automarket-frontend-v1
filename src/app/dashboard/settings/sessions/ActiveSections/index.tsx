import React, { FC } from "react";

import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import { ActiveSessionItem } from "./ActiveSessionItem";

interface ActiveSectionsProps {}

export const ActiveSections: FC<ActiveSectionsProps> = () => {
  return (
    <HStack alignItems="flex-start">
      <Box w="2xl">
        <Box mb="4">
          <HStack>
            <Text fontSize="lg" fontWeight="semibold">
              Sessiones Activas
            </Text>
          </HStack>
          <Text fontSize="sm">Estas son las sesiones activas en tu cuenta.</Text>
        </Box>
      </Box>
      <Stack flex="1" spacing="4">
        <ActiveSessionItem isCurrent={true} />
      </Stack>
    </HStack>
  );
};

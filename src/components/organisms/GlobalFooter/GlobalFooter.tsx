import React from "react";

import { Box, Divider, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

import { BottomSession } from "./BottomSession";
import { RightSession } from "./RightSession";

export const GlobalFooter = () => {
  return (
    <Stack spacing="4">
      <Divider borderColor="gray.300" />
      <Box px="12">
        <Flex alignItems="center" justifyContent="space-between">
          <HStack spacing="6">
            <Box>
              <Image alt="" cursor="pointer" src="/assets/logo.svg" w="52" />
            </Box>
            <HStack fontWeight="medium" spacing="6">
              <Text>Descripción general</Text>
              <Text>Características</Text>
              <Text>Planes y Precios</Text>
              <Text>Ayuda</Text>
            </HStack>
          </HStack>
          <RightSession />
        </Flex>
      </Box>
      <Divider borderColor="gray.300" />
      <BottomSession />
    </Stack>
  );
};

import React from "react";

import { Box, Button, Flex, HStack, Progress, Stack, Text } from "@chakra-ui/react";

import { X } from "react-feather";

export const BottomSession = () => {
  return (
    <Box>
      <Stack spacing="4">
        <Stack bgColor="primary.500" color="white" p="4" rounded="md">
          <Flex justifyContent="space-between">
            <Text as="b">Publicaciones agregadas</Text>
            <X size="1.25rem" />
          </Flex>
          <Box>
            <Text>Has agregado 15 publicaciones de 35 permitidas. Actualiza tu plan para agregar más</Text>
          </Box>
          <Progress bgColor="white" colorScheme="gray" value={40} />
          <HStack>
            <Button size="sm">Actualizar</Button>
          </HStack>
        </Stack>
        <Box bgColor="secondary.500" color="white" p="4" rounded="md">
          <Text fontWeight="semibold" textAlign="center">
            Erickson Auto Import
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

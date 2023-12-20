"use client";
import React from "react";

import { Box, Center, Flex, FormControl, FormLabel, HStack, IconButton, Stack, Text } from "@chakra-ui/react";

import { Button, SimpleTextField } from "@/components/atoms";

import { Copy } from "react-feather";

const DealerProfilePage = () => {
  return (
    <HStack h="full">
      <Center flex="1" h="full">
        <Box minW="lg">
          <Stack>
            <Center>
              <Box bgColor="primary.500" h="32" rounded="full" w="32" />
            </Center>
            <FormControl>
              <FormLabel>Nombre del Distribuidor</FormLabel>
              <SimpleTextField />
            </FormControl>
            <FormControl>
              <FormLabel>Eslogan</FormLabel>
              <SimpleTextField />
            </FormControl>
            <HStack>
              <Button bgColor="gray.100" colorScheme="secondary" variant="ghost">
                Cancelar
              </Button>
              <Button colorScheme="primary">Guardar Cambios</Button>
            </HStack>
          </Stack>
        </Box>
      </Center>
      <Box border="1px" h="full" w="xl"></Box>
    </HStack>
  );
};

export default DealerProfilePage;

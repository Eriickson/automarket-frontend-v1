"use client";
import React from "react";

import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { SelectField } from "@/components/organisms";

export const CreateVehicleButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button colorScheme="primary" ref={btnRef} rounded="sm" onClick={onOpen}>
        {/* <Button colorScheme="primary" rounded="sm" onClick={() => push("/dashboard/vehicle-fleet/register")}> */}
        Registrar Vehículo
      </Button>
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="right" size="xl" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p="0">
            <Flex alignItems="flex-start" h="full">
              <Box backgroundColor="gray.800" h="full" w="2xs">
                Hola a todos
              </Box>
              <Stack flex={1} px="6" py="4" spacing="6">
                <Box>
                  <Text as="h3" fontSize="xl" fontWeight="semibold">
                    Registrar Vehículo
                  </Text>
                  <Text>Registra un nuevo vehículo en la plataforma.</Text>
                </Box>
                <Stack>
                  <FormControl>
                    <FormLabel>Marca</FormLabel>
                    <SelectField options={[]} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Modelo</FormLabel>
                    <SelectField options={[]} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Trim Level</FormLabel>
                    <SelectField options={[]} />
                  </FormControl>
                </Stack>
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

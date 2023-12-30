import React, { FC } from "react";

import { Box, Center, Flex, HStack, ListItem, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { ModalWithButton } from "@/components/organisms/ModalWithButton";

import { Monitor } from "react-feather";

import { SessionBodyComponent } from "./SessionBodyComponent";

interface SessionListItemProps {
  isActive?: boolean;
}

export const SessionListItem: FC<SessionListItemProps> = ({ isActive }) => {
  return (
    <ModalWithButton
      BodyComponent={SessionBodyComponent}
      buttonComponent={
        <ListItem _active={{ transition: "all 0.2s", bg: "gray.100" }} px="2" py="2">
          <HStack>
            <Center
              backgroundColor="white"
              border="1px"
              borderColor="gray.300"
              color="gray.500"
              h="10"
              rounded="sm"
              w="10"
            >
              <Monitor size="1.25rem" />
            </Center>
            <Box flex="1">
              <Flex justifyContent="space-between" w="full">
                <Text fontSize="xs" fontWeight="semibold" lineHeight="1.2" userSelect="none">
                  Oficina Principal - Distrito Nacional
                </Text>
                {isActive ? (
                  <Text color="green.500" fontSize="xs" fontWeight="bold" lineHeight="1.2" userSelect="none">
                    Sesion activa
                  </Text>
                ) : null}
              </Flex>
              <Text fontSize="2xs" fontWeight="medium" userSelect="none">
                20 Jul. 2021 - 10:00 AM
              </Text>
            </Box>
          </HStack>
        </ListItem>
      }
      FooterComponent={() => (
        <HStack alignItems="center" flex="1" justifyContent="space-between">
          {isActive ? (
            <Text color="green.500" fontSize="xs" fontWeight="semibold">
              Sesión Actual
            </Text>
          ) : (
            <Box />
          )}

          <Button colorScheme="red" variant="ghost">
            Cerrar sesión
          </Button>
        </HStack>
      )}
      title="Oficina Principal"
    />
  );
};

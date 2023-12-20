import React from "react";

import { Box, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { ProfileSession } from "../ProfileSession";

export const ContactInformation = () => {
  return (
    <ProfileSession
      subtitle="Agrega tu información de contacto para que tus clientes puedan contactarte."
      title="Información de contacto"
    >
      <HStack>
        <Box flex="1">
          <Text mb="4">Números de teléfono</Text>
          <UnorderedList spacing="2">
            <ListItem>
              <Box>
                <Text color="gray.500" fontSize="sm" fontWeight="medium">
                  Oficina Principal
                </Text>
                <Text fontWeight="semibold">+1 (829) 641-0959</Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box>
                <Text color="gray.500" fontSize="sm" fontWeight="medium">
                  Agencia Secundaria
                </Text>
                <Text fontWeight="semibold">+1 (829) 641-0959</Text>
              </Box>
            </ListItem>
          </UnorderedList>
        </Box>{" "}
        <Box flex="1">
          <Text mb="4">Correos electrónicos</Text>
          <UnorderedList spacing="2">
            <ListItem>
              <Box>
                <Text color="gray.500" fontSize="sm" fontWeight="medium">
                  Oficina Principal
                </Text>
                <Text fontWeight="semibold">correo@correo.com</Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box>
                <Text color="gray.500" fontSize="sm" fontWeight="medium">
                  Agencia Secundaria
                </Text>
                <Text fontWeight="semibold">email@email.com</Text>
              </Box>
            </ListItem>
          </UnorderedList>
        </Box>
      </HStack>
    </ProfileSession>
  );
};

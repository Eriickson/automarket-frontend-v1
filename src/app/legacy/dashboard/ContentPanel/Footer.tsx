import React from "react";

import { Box, Divider, Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Divider />
      <Box py="1">
        <Flex justifyContent="space-between">
          <Box>
            <Text fontWeight="medium">© {new Date().getFullYear()} Automarket, Todos los derechos reservados.</Text>
          </Box>
          <List>
            <HStack spacing="4">
              <ListItem cursor="pointer">
                <Text fontWeight="medium">Políticas de Privacidad</Text>
              </ListItem>
              <ListItem cursor="pointer">
                <Text fontWeight="medium">Términos y Condiciones</Text>
              </ListItem>
              <ListItem cursor="pointer">
                <Text fontWeight="medium">Servicio al Cliente</Text>
              </ListItem>
            </HStack>
          </List>
        </Flex>
      </Box>
    </>
  );
};

import React from "react";

import { Box, Divider, Flex, HStack, List, ListItem, Stack, Text } from "@chakra-ui/react";

export const ContentPanel = () => {
  return (
    <Box h="full">
      <Stack h="full">
        <Box flex="1">Content Panel</Box>
        <Divider />
        <Box py="1">
          <Flex justifyContent="space-between">
            <Box>
              <Text fontWeight="medium">
                © {new Date().getFullYear()}{" "}
                <Text as="span" fontSize="xl" fontWeight="normal">
                  a
                </Text>
                utomarket, Todos los derechos reservados.
              </Text>
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
      </Stack>
    </Box>
  );
};

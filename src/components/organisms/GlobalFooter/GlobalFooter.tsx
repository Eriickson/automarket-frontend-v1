import React from "react";

import { Box, Divider, Flex, HStack, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";

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
          <List>
            <HStack spacing="3">
              <ListItem cursor="pointer">
                <Text fontWeight="medium">Políticas de Privacidad</Text>
              </ListItem>
              <Text fontSize="2xl" fontWeight="black" lineHeight="0" userSelect="none">
                ·
              </Text>
              <ListItem cursor="pointer">
                <Text fontWeight="medium">Términos y Condiciones</Text>
              </ListItem>
              <Text fontSize="2xl" fontWeight="black" lineHeight="0" userSelect="none">
                ·
              </Text>
              <ListItem cursor="pointer">
                <Text fontWeight="medium">Servicio al Cliente</Text>
              </ListItem>
            </HStack>
          </List>
        </Flex>
      </Box>
      <Divider borderColor="gray.300" />
      <Box pb="4" pt="2" px="12">
        <Flex justifyContent="space-between">
          <Box>
            <Box>© 2021 automarket.agency. Todos los derechos reservados.</Box>
          </Box>
          <HStack spacing="4">
            <Image alt="" cursor="pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" w="8" />
            <Image alt="" cursor="pointer" src="https://cdn-icons-png.flaticon.com/512/3992/3992550.png" w="8" />
            <Image alt="" cursor="pointer" src="https://cdn-icons-png.flaticon.com/512/3536/3536479.png" w="8" />
            <Image alt="" cursor="pointer" src="https://cdn-icons-png.flaticon.com/512/747/747374.png" w="8" />
            <Image alt="" cursor="pointer" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" w="8" />
          </HStack>
        </Flex>
      </Box>
    </Stack>
  );
};

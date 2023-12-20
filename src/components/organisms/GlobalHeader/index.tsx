import React from "react";

import { Avatar, Badge, Box, Button, Flex, HStack, IconButton, Image, Text } from "@chakra-ui/react";

import { Bell } from "react-feather";

const NavbarItems = [
  { label: "Buscar Publicaciones", href: "/" },
  { label: "Encontrar Distribuidores", href: "/" },
  { label: "Explorar", href: "/" },
  { label: "Planes y Precios", href: "/" },
  { label: "Dashboard", href: "/" },
];

export const GlobalHeader = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" px="12" py="6">
      <Flex alignItems="center" justifyContent="space-between">
        <HStack spacing="6">
          <Box>
            <Image alt="" src="/assets/logo.svg" w="52" />
          </Box>
          {NavbarItems.map((item) => (
            <Box key={item.label}>
              <Text fontWeight="semibold">{item.label}</Text>
            </Box>
          ))}
        </HStack>
        <Box>
          <HStack spacing="8">
            <HStack>
              <Button bgColor="gray.100" colorScheme="primary" variant="ghost">
                Nueva publicación
              </Button>
              <IconButton aria-label="" size="sm">
                <Bell size="1.25rem" />
              </IconButton>
            </HStack>
            <HStack>
              <Flex alignItems="flex-end" flexDir="column" userSelect="none">
                <Text as="b">Erickson Manuel Holguín</Text>
                <Badge colorScheme="primary" variant="solid">
                  Label Here
                </Badge>
              </Flex>
              <Avatar />
            </HStack>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

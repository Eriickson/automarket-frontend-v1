import React from "react";

import Link from "next/link";

import { Avatar, Badge, Box, Button, Flex, HStack, IconButton, Image, Text } from "@chakra-ui/react";

import { Bell } from "react-feather";

const navbarItems = [
  { label: "Buscar Publicaciones", href: "/searcher/publications" },
  { label: "Encontrar Distribuidores", href: "/searcher/agencies" },
  { label: "Explorar", href: "/explore-and-discover" },
  { label: "Planes y Precios", href: "/plans-and-pricing" },
  { label: "Dashboard", href: "/" },
];

export const GlobalHeader = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" px="12" py="6">
      <Flex alignItems="center" justifyContent="space-between">
        <HStack spacing="8">
          <Box>
            <Link href="/">
              <Image alt="" src="/assets/logo.svg" w="52" />
            </Link>
          </Box>
          <HStack>
            {navbarItems.map((item, i) => (
              <Link href={item.href} key={item.label}>
                <Box
                  borderBottom={i === 2 ? "2px" : "none"}
                  color={i === 2 ? "primary.500" : undefined}
                  fontWeight={i === 2 ? "bold" : "semibold"}
                  px="1"
                >
                  <Text userSelect="none">{item.label}</Text>
                </Box>
              </Link>
            ))}
          </HStack>
        </HStack>
        <Box>
          {/*  <HStack spacing="8">
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
                  Rent a Car
                </Badge>
              </Flex>
              <Avatar />
            </HStack>
          </HStack> */}
          <HStack>
            <Button colorScheme="primary" rounded="sm">
              Registrarse
            </Button>
            <Button bgColor="gray.200" colorScheme="secondary" rounded="sm" variant="ghost">
              Iniciar Sesión
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

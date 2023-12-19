import React from "react";

import { Avatar, Badge, Box, Button, Flex, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";

import { Bell } from "react-feather";

import { ContentPanel } from "./ContentPanel";
import { SidebarLeft } from "./SidebarLeft";

export const DashboardView = () => {
  return (
    <Box h="100vh" maxH="100vh">
      <Stack h="full">
        <Box borderBottom="1px" borderColor="gray.200" px="12" py="6">
          <Flex alignItems="center" justifyContent="space-between">
            <HStack spacing="6">
              <Box>
                <Image alt="" src="assets/logo.svg" w="52" />
              </Box>
              <Box>
                <Text fontWeight="semibold">Publicaciones</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold">Distribuidores</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold">Planes y Precios</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold">Explorar</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold">Dashboard</Text>
              </Box>
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
        <Box flex="1" px="12">
          <HStack alignItems="flex-start" h="full">
            <Box h="full" w="sm">
              <SidebarLeft />
            </Box>
            <Box flex="1" h="full">
              <ContentPanel />
            </Box>
          </HStack>
        </Box>
        <Box />
      </Stack>
    </Box>
  );
};

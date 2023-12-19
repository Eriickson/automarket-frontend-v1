import React from "react";

import { Avatar, Badge, Box, Button, Flex, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";

import { Bell } from "react-feather";

import { ContentPanel } from "./ContentPanel";
import { SidebarLeft } from "./SidebarLeft";
import { SidebarRight } from "./SidebarRight";

export const DashboardView = () => {
  return (
    <Box h="100vh" maxH="100vh">
      <Stack h="full">
        <Box borderBottom="1px" borderColor="gray.200" px="12" py="6">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Image alt="" src="assets/logo.svg" w="52" />
            </Box>
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
            <SidebarRight />
          </HStack>
        </Box>
        <Box />
      </Stack>
    </Box>
  );
};

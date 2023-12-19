import React from "react";

import { Avatar, Badge, Box, Button, Flex, HStack, IconButton, Image, Text } from "@chakra-ui/react";

import { Bell } from "react-feather";

export const DashboardView = () => {
  return (
    <Box h="100vh" maxH="100vh">
      <Box borderBottom="1px" borderColor="gray.400" px="12" py="6">
        <Flex justifyContent="space-between">
          <Box>
            <Image alt="" src="assets/logo.svg" />
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
    </Box>
  );
};
{
  /* <Box h="full">
        <Flex h="full">
          <Box border="1px" h="full" minW="md">
            hola
          </Box>
          <Box h="full"></Box>
        </Flex>
      </Box> */
}

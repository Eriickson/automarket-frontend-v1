import React from "react";

import { Avatar, Box, Flex, HStack, List, ListItem, Stack, Text } from "@chakra-ui/react";

import { Info } from "react-feather";

const DashboardPage = () => {
  return (
    <Stack h="100vh" maxH="100vh" spacing="4">
      <Box borderBottom="1px" borderColor="gray.300" px="24" py="4">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Text fontSize="2xl" fontWeight="semibold">
              Automarket
            </Text>
          </Box>
          <Box>
            <Box _hover={{ bgColor: "gray.100" }} cursor="pointer" px="4" py="2" rounded="sm" transition="150ms">
              <HStack>
                <Avatar bgColor="gray.400" name="EM" />
                <Box userSelect="none">
                  <Text fontWeight="bold">Erickson Manuel Holguín</Text>
                  <Text color="gray.500" fontSize="sm" fontWeight="medium">
                    Administrador
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Box>
      <HStack alignItems="flex-start" h="full" spacing="4">
        <Box h="full" pl="24" w="md">
          <List>
            <Stack>
              <ListItem _hover={{ bgColor: "gray.200" }} cursor="pointer" px="6" py="4" rounded="sm" transition="150ms">
                <HStack>
                  <Info />
                  <Text fontWeight="semibold">Dashboard</Text>
                </HStack>
              </ListItem>
              <ListItem bgColor="gray.200" cursor="pointer" px="6" py="4" rounded="sm">
                <HStack color="primary.500">
                  <Info />
                  <Text fontWeight="semibold">Dashboard</Text>
                </HStack>
              </ListItem>
              <ListItem cursor="pointer" px="6" py="4" rounded="sm">
                <HStack>
                  <Info />
                  <Text fontWeight="semibold">Dashboard</Text>
                </HStack>
              </ListItem>
              <ListItem cursor="pointer" px="6" py="4" rounded="sm">
                <HStack>
                  <Info />
                  <Text fontWeight="semibold">Dashboard</Text>
                </HStack>
              </ListItem>
            </Stack>
          </List>
        </Box>
        <Box border="1px" borderColor="gray.200" flex="1" h="full" mr="24">
          Hola
        </Box>
      </HStack>
      <Box />
    </Stack>
  );
};

export default DashboardPage;

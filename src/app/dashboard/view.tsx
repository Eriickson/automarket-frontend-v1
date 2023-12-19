import React from "react";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Bell, BookOpen, Home, Image as FeatherImage, User, X } from "react-feather";

export const DashboardView = () => {
  return (
    <Box h="100vh" maxH="100vh">
      <Stack h="full">
        <Box borderBottom="1px" borderColor="gray.400" px="12" py="6">
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
            <Box h="full" w="xs">
              <Flex flexDir="column" h="full">
                <List flex="1" spacing="2">
                  <ListItem bgColor="primary.500" color="white" fontWeight="semibold" px="3" py="3" rounded="sm">
                    <HStack>
                      <Home />
                      <Text>Tablero Principal</Text>
                    </HStack>
                  </ListItem>
                  <ListItem /* bgColor="primary.500" color="white"  */ fontWeight="semibold" px="2" py="2" rounded="sm">
                    <HStack>
                      <BookOpen />
                      <Text>Publicaciones</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <FeatherImage />
                      <Text>Perfil Empresarial</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <User />
                      <Text>Almacen</Text>
                    </HStack>
                  </ListItem>
                </List>
                <Box>
                  <Stack spacing="4">
                    <Stack bgColor="primary.500" color="white" p="4" rounded="md">
                      <Flex justifyContent="space-between">
                        <Text as="b">Used space</Text>
                        <X size="1.25rem" />
                      </Flex>
                      <Box>Your team has used 80% of your available space. Need more?</Box>
                      <Progress bgColor="white" colorScheme="gray" value={40} />
                      <HStack>
                        <Button size="sm">Actualizar</Button>
                      </HStack>
                    </Stack>
                    <Box bgColor="primary.900" color="white" p="4" rounded="md">
                      <Text fontWeight="semibold" textAlign="center">
                        Erickson Auto Import
                      </Text>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
            </Box>
            <Box border="1px" display="none" flex="1" h="full">
              Content
            </Box>
          </HStack>
        </Box>
        <Box />
      </Stack>
    </Box>
  );
};

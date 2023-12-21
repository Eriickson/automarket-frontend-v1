import React from "react";

import {
  Box,
  HStack,
  IconButton,
  List,
  ListItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { Button, SimpleTextFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { Mail, Phone, Type, X } from "react-feather";

export const ContactForm = () => {
  const { FormProvider } = useFormProvider();

  return (
    <FormProvider
      onSubmit={async (data) => {
        console.log(data);
      }}
    >
      <Stack>
        <Text fontWeight="medium"></Text>
        <Tabs colorScheme="primary" variant="enclosed-colored">
          <TabList>
            <Tab mr="2" px="2.5" py="1.5">
              <Text fontSize="sm">
                Números telefónicos <b>(4)</b>
              </Text>
            </Tab>
            <Tab px="2.5" py="1.5">
              <Text fontSize="sm">
                Correos electrónico <b>(4)</b>
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <List spacing="4">
                {[1, 2].map((item) => (
                  <ListItem key={item}>
                    <HStack>
                      <Box flex="1" pos="relative">
                        <Box bgColor="blackAlpha.200" bottom="2.5" color="black" p="1" position="absolute" rounded="sm">
                          <Type size="1rem" strokeWidth="2" />
                        </Box>
                        <SimpleTextFieldController
                          _focus={{ ring: 0 }}
                          border="0"
                          borderBottom="2px"
                          fontSize="sm"
                          name="email"
                          pl="8"
                          placeholder="Nombre de teléfono"
                          px="0"
                          py="1"
                        />
                      </Box>
                      <Text fontSize="xl">:</Text>
                      <Box flex="1" pos="relative">
                        <Box bgColor="blackAlpha.200" bottom="2.5" color="black" p="1" position="absolute" rounded="sm">
                          <Phone size="1rem" strokeWidth="2.5" />
                        </Box>
                        <SimpleTextFieldController
                          _focus={{ ring: 0 }}
                          border="0"
                          borderBottom="2px"
                          fontSize="sm"
                          name="email1"
                          pl="8"
                          placeholder="Número de teléfono"
                          px="0"
                          py="1"
                        />
                      </Box>
                      <IconButton aria-label="" rounded="sm" size="xs">
                        <X size="1rem" strokeWidth="2" />
                      </IconButton>
                    </HStack>
                  </ListItem>
                ))}
                <Button size="sm">Agregar número telefónico</Button>
              </List>
            </TabPanel>
            <TabPanel>
              <List spacing="4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <ListItem key={item}>
                    <HStack>
                      <Box flex="1" pos="relative">
                        <Box bgColor="blackAlpha.200" bottom="2.5" color="black" p="1" position="absolute" rounded="sm">
                          <Type size="1rem" strokeWidth="2" />
                        </Box>
                        <SimpleTextFieldController
                          _focus={{ ring: 0 }}
                          border="0"
                          borderBottom="2px"
                          fontSize="sm"
                          name="email"
                          pl="8"
                          placeholder="Nombre de correo"
                          px="0"
                          py="1"
                        />
                      </Box>
                      <Text fontSize="xl">:</Text>
                      <Box flex="1" pos="relative">
                        <Box bgColor="blackAlpha.200" bottom="2.5" color="black" p="1" position="absolute" rounded="sm">
                          <Mail size="1rem" strokeWidth="2.5" />
                        </Box>
                        <SimpleTextFieldController
                          _focus={{ ring: 0 }}
                          border="0"
                          borderBottom="2px"
                          fontSize="sm"
                          name="email1"
                          pl="8"
                          placeholder="Correo electrónico"
                          px="0"
                          py="1"
                        />
                      </Box>
                      <IconButton aria-label="" rounded="sm" size="xs">
                        <X size="1rem" strokeWidth="2" />
                      </IconButton>
                    </HStack>
                  </ListItem>
                ))}
                <Button isDisabled size="sm">
                  Agregar Correo Electrónico
                </Button>
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </FormProvider>
  );
};

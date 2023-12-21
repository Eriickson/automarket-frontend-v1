import React from "react";

import { Box, Divider, HStack, IconButton, List, ListItem, Stack, Text } from "@chakra-ui/react";

import { SimpleTextField, SimpleTextFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { Mail, Type, X } from "react-feather";

export const ContactForm = () => {
  const { FormProvider } = useFormProvider();

  return (
    <FormProvider
      onSubmit={async (data) => {
        console.log(data);
      }}
    >
      {/* <SimpleTextFieldController fontSize="sm" label="Número telefónico" name="phone" px="2.5" py="2" />
      <SimpleTextFieldController fontSize="sm" label="Correo electrónico" name="email" px="2.5" py="2" /> */}
      <Stack>
        <Text fontWeight="medium">
          Números telefónicos <b>(4)</b>
        </Text>
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
                    defaultValue="Correo electrónico Principal"
                    fontSize="sm"
                    name="email"
                    pl="8"
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
                    defaultValue="erickson01d@gmail.com"
                    fontSize="sm"
                    name="email1"
                    pl="8"
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
        </List>
      </Stack>
    </FormProvider>
  );
};

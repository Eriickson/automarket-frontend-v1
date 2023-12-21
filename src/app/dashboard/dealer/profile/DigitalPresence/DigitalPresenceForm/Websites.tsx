import React from "react";

import { Box, HStack, List, ListItem, TabPanel, Text } from "@chakra-ui/react";

import { Button, IconButton, SimpleTextFieldController } from "@/components/atoms";

import { Globe, Type, X } from "react-feather";
import { useFieldArray } from "react-hook-form";

export const WebsitesPanel = () => {
  const { append, fields, remove } = useFieldArray({ name: "emails" });

  return (
    <TabPanel>
      <List spacing="4">
        {fields.map((field, i) => (
          <ListItem key={field.id}>
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
                  name={`emails.${i}.title`}
                  pl="8"
                  placeholder="Nombre del sitio web"
                  px="0"
                  py="1"
                />
              </Box>
              <Text fontSize="xl">:</Text>
              <Box flex="1" pos="relative">
                <Box bgColor="blackAlpha.200" bottom="2.5" color="black" p="1" position="absolute" rounded="sm">
                  <Globe size="1rem" strokeWidth="2.5" />
                </Box>
                <SimpleTextFieldController
                  _focus={{ ring: 0 }}
                  border="0"
                  borderBottom="2px"
                  fontSize="sm"
                  name={`emails.${i}.value`}
                  pl="8"
                  placeholder="Enlace del sitio web"
                  px="0"
                  py="1"
                />
              </Box>
              <IconButton aria-label="" rounded="sm" size="xs" onClick={() => remove(i)}>
                <X size="1rem" strokeWidth="2" />
              </IconButton>
            </HStack>
          </ListItem>
        ))}
        <Button isDisabled={fields.length === 3} size="sm" onClick={() => append({})}>
          Agregar Sitio Web
        </Button>
      </List>
    </TabPanel>
  );
};

import React from "react";

import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { LabelValueField } from "../LabelValueField";

export const EmailContactList = () => {
  return (
    <Box flex="1">
      <Text mb="4">Correos electrónicos</Text>
      <UnorderedList spacing="2">
        <ListItem>
          <LabelValueField label="Oficina Principal" value="correo@correo.com" />
        </ListItem>
        <ListItem>
          <LabelValueField label="Oficina Principal" value="email@email.com" />
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

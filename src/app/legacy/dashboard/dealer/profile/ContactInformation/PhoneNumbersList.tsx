import React from "react";

import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { LabelValueField } from "../LabelValueField";

export const PhoneNumbersList = () => {
  return (
    <Box flex="1">
      <Text mb="4">Números de teléfono</Text>
      <UnorderedList spacing="2">
        <ListItem>
          <LabelValueField label="Oficina Principal" value="+1 (829) 641-0959" />
        </ListItem>
        <ListItem>
          <LabelValueField label=" Agencia Secundaria" value="+1 (829) 641-0959" />
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

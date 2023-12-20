import React from "react";

import { Box, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { LabelValueField } from "../LabelValueField";
import { ProfileSession } from "../ProfileSession";
import { ModificationModal } from "./ModificationModal";

export const ContactInformation = () => {
  return (
    <ProfileSession
      ModificationModal={ModificationModal}
      subtitle="Agrega tu información de contacto para que tus clientes puedan contactarte."
      title="Información de contacto"
    >
      <HStack>
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
        </Box>{" "}
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
      </HStack>
    </ProfileSession>
  );
};

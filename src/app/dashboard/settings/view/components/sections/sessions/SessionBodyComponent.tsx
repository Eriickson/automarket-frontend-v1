import React, { FC } from "react";

import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";

import { ModalComponentProps } from "@/components/organisms/ModalWithButton";

interface SessionBodyComponentProps extends ModalComponentProps {}

export const SessionBodyComponent: FC<SessionBodyComponentProps> = () => {
  return (
    <Box>
      <List spacing="1">
        <SessionBodyComponentItem label="Localización" value="Santiago de los Caballeros, DO." />
        <SessionBodyComponentItem label="Plataforma" value="Macintosh" />
        <SessionBodyComponentItem label="Sistema Operativo" value="MacOS" />
        <SessionBodyComponentItem label="Navegador" value="Google Chrome" />
        <SessionBodyComponentItem label="Fecha de inicio" value="20 Jul. 2021 - 10:00 AM" />
        <SessionBodyComponentItem label="Última actividad" value="20 Jul. 2021 - 10:00 AM" />
      </List>
    </Box>
  );
};

interface SessionBodyComponentItemProps {
  value: string;
  label: string;
}

export const SessionBodyComponentItem: FC<SessionBodyComponentItemProps> = ({ label, value }) => {
  return (
    <ListItem>
      <HStack>
        <Text fontSize="xs">{label}</Text>
        <Box borderTop="3px" borderTopColor="gray.400" borderTopStyle="dotted" flex="1" />
        <Text color="gray.700" fontSize="xs" fontWeight="medium">
          {value}
        </Text>
      </HStack>
    </ListItem>
  );
};

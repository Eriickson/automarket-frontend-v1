import React from "react";

import { HStack, Stack, Text } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { Hash, MapPin, Sun } from "react-feather";
export const GeneralInformation = () => {
  return (
    <ScreenAreaDelimiter maxWidth="1440">
      <Stack spacing="2">
        <HStack>
          <Sun size="1.25rem" strokeWidth="2.5" />
          <Text fontSize="sm" fontWeight="medium" lineHeight="1.2">
            Miembro desde 2019
          </Text>
        </HStack>
        <HStack>
          <MapPin size="1.25rem" strokeWidth="2.5" />
          <Text fontSize="sm" fontWeight="medium" lineHeight="1.2">
            Autop. Juan Pablo Duarte 5, Canabacoa, Santiago de los Caballeros
          </Text>
        </HStack>
        <HStack>
          <Hash size="1.25rem" strokeWidth="2.5" />
          <Text fontSize="sm" fontWeight="medium" lineHeight="1.2">
            Más de 100 vehículos publicados
          </Text>
        </HStack>
      </Stack>
    </ScreenAreaDelimiter>
  );
};

import React from "react";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

import { Clock, MapPin } from "react-feather";

export const DealerInformationSession = () => {
  return (
    <HStack alignItems="flex-start" spacing="6">
      <HStack>
        <Avatar />
        <Box>
          <Text fontWeight="medium" lineHeight="1.2">
            Nombre del usuario
          </Text>
          <Text color="gray.500" fontSize="sm" maxW="64" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
            Los mejores vehículos a los mejores precios
          </Text>
        </Box>
      </HStack>
      <HStack color="gray.700">
        <Clock size="1rem" /> <Text>Hace 2 horas</Text>
      </HStack>
      <HStack color="gray.700">
        <MapPin size="1rem" /> <Text>Canabacoa, Santiago de los Caballeros</Text>
      </HStack>
    </HStack>
  );
};

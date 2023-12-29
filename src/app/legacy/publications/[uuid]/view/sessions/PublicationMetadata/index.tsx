import React from "react";

import { HStack, Text } from "@chakra-ui/react";

import { Clock, Eye, MapPin } from "react-feather";

export const PublicationMetadata = () => {
  return (
    <HStack>
      <HStack spacing="1">
        <Eye size="1rem" strokeWidth="2.5" />
        <Text color="gray.600" fontSize="xs" fontWeight="medium">
          3.000 Visitas
        </Text>
      </HStack>
      <HStack spacing="1">
        <Clock size="1rem" strokeWidth="2.5" />
        <Text color="gray.600" fontSize="xs" fontWeight="medium">
          hace 1 día
        </Text>
      </HStack>
      <HStack spacing="1">
        <MapPin size="1rem" strokeWidth="2.5" />
        <Text color="gray.600" fontSize="xs" fontWeight="medium">
          Puñal, Santiago
        </Text>
      </HStack>
    </HStack>
  );
};

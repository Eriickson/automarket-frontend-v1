import React from "react";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";


export const DealerInformationSession = () => {
  return (
    <HStack alignItems="flex-start" spacing="6">
      <HStack>
        <Avatar src="https://img.supercarros.com/CustomersLogos/100x90/0/55563.jpg" />
        <Box>
          <Text fontWeight="medium" lineHeight="1.2">
            Electric Motors Showroom
          </Text>
          <Text color="gray.500" fontSize="sm" maxW="72" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
            Los mejores vehículos a los mejores precios
          </Text>
        </Box>
      </HStack>
    </HStack>
  );
};

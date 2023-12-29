import React from "react";

import { Divider, HStack, Text } from "@chakra-ui/react";

export const OrDivider = () => {
  return (
    <HStack w="full">
      <Divider borderColor="gray.300" />
      <Text color="gray.500" fontSize="sm" fontWeight="medium" minW="max-content">
        O si prefieres
      </Text>
      <Divider borderColor="gray.300" />
    </HStack>
  );
};

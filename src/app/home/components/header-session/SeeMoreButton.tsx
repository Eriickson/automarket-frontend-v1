import React from "react";

import { HStack, Text } from "@chakra-ui/react";

import { ArrowRight } from "react-feather";

export const SeeMoreButton = () => {
  return (
    <HStack alignItems="center" spacing="1">
      <Text fontSize={["xs", null, null, "sm"]} fontWeight="medium">
        Ver más
      </Text>
      <ArrowRight size="0.75rem" />
    </HStack>
  );
};

import React, { FC } from "react";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { ArrowRight } from "react-feather";

interface HeaderSessionProps {
  title: string;
  description: string;
}

export const HeaderSession: FC<HeaderSessionProps> = ({ description, title }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <Text fontSize="lg" fontWeight="semibold" lineHeight="1">
          {title}
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Box>
      <HStack alignItems="center" spacing="1">
        <Text fontSize="sm" fontWeight="medium">
          Ver más
        </Text>
        <ArrowRight size="1rem" />
      </HStack>
    </Flex>
  );
};

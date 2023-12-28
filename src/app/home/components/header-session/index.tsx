import React, { FC } from "react";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { IconButton } from "@/components/atoms";

import { HelpCircle } from "react-feather";

import { SeeMoreButton } from "./SeeMoreButton";

interface HeaderSessionProps {
  title: string;
  description: string;
}

export const HeaderSession: FC<HeaderSessionProps> = ({ description, title }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box flex="1">
        <Flex alignItems="center" justifyContent="space-between" mb="0.5">
          <HStack spacing="1">
            <Text fontSize={["md", null, null, "lg"]} fontWeight="semibold" lineHeight="1">
              {title}
            </Text>
            <IconButton aria-label="" size="xs" variant="ghost">
              <HelpCircle size="1rem" />
            </IconButton>
          </HStack>
          <Box display={["block", null, null, null, "none"]}>
            <SeeMoreButton />
          </Box>
        </Flex>
        <Text display={["none", null, null, "block"]} fontSize={["xs", null, null, "sm"]} lineHeight={["1"]} pr="24">
          {description}
        </Text>
      </Box>
      <Box display={["none", null, null, null, "block"]}>
        <SeeMoreButton />
      </Box>
    </Flex>
  );
};

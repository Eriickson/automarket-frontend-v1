import React, { FC } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import { SeeMoreButton } from "./SeeMoreButton";

interface HeaderSessionProps {
  title: string;
  description: string;
}

export const HeaderSession: FC<HeaderSessionProps> = ({ description, title }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <Flex alignItems="center" justifyContent="space-between" mb="0.5">
          <Text fontSize={["md", null, null, "lg"]} fontWeight="semibold" lineHeight="1">
            {title}
          </Text>
          <Box display={["block", null, null, null, "none"]}>
            <SeeMoreButton />
          </Box>
        </Flex>
        <Text fontSize={["xs", null, null, "sm"]} lineHeight={["1"]} pr="24">
          {description}
        </Text>
      </Box>
      <Box display={["none", null, null, null, "block"]}>
        <SeeMoreButton />
      </Box>
    </Flex>
  );
};

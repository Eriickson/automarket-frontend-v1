"use client";
import React, { FC } from "react";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { IconButton } from "@/components/atoms";

import { HelpCircle } from "react-feather";

import { SeeMoreButton } from "./SeeMoreButton";

interface GallerySectionHeaderProps {
  title: string;
  description?: string;
  hiddenSeeMore?: boolean;
}

export const GallerySectionHeader: FC<GallerySectionHeaderProps> = ({ hiddenSeeMore, description, title }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box flex="1">
        <Flex alignItems="center" justifyContent="space-between" mb="0.5">
          <HStack spacing="1">
            <Text fontSize={["md", null, null, "lg"]} fontWeight="semibold" lineHeight="1">
              {title}
            </Text>
            {description ? (
              <IconButton aria-label="" display={[null, null, null, null, null, "none"]} size="xs" variant="ghost">
                <HelpCircle size="1rem" />
              </IconButton>
            ) : null}
          </HStack>
          <Box display={["block", null, null, null, "none"]}>
            <SeeMoreButton />
          </Box>
        </Flex>
        {description ? (
          <Text
            display={["none", null, null, null, null, "block"]}
            fontSize={["xs", null, null, "sm"]}
            lineHeight={["1"]}
            pr="24"
          >
            {description}
          </Text>
        ) : null}
      </Box>
      {hiddenSeeMore ? null : (
        <Box display={["none", null, null, null, "block"]}>
          <SeeMoreButton />
        </Box>
      )}
    </Flex>
  );
};

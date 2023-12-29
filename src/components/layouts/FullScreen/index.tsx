"use client";

import React, { FC } from "react";

import { Box, Center, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";

import { generateNull } from "@/utils";

import { HeaderSession } from "./HeaderSession";

interface FullScreenLayoutProps {
  title: string;
  children: React.ReactNode;
  rightTopComponent?: React.ReactNode;
}

const nulls = generateNull(4);

export const FullScreenLayout: FC<FullScreenLayoutProps> = ({ children }) => {
  return (
    <SimpleGrid borderColor="blue" columns={12} minH="100dvh">
      <GridItem colSpan={[12, ...nulls, 6]}>
        <Flex flexDirection="column" h="full">
          <HeaderSession />
          <Center flex="1" h="full">
            {children}
          </Center>
          <Box h={[null, null, null, null, "24"]}></Box>
        </Flex>
      </GridItem>
      <GridItem colSpan={[12, ...nulls, 6]} display={["none", ...nulls, "block"]}>
        <Box bgColor="#1C1C1C" h="full" />
      </GridItem>
    </SimpleGrid>
  );
};

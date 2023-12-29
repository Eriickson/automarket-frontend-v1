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

export const FullScreenLayout: FC<FullScreenLayoutProps> = ({ children }) => {
  return (
    <Box h="100vh">
      <SimpleGrid columns={12} h="full">
        <GridItem colSpan={[12, ...generateNull(5), 8]}>
          <Flex flexDirection="column" h="full">
            <HeaderSession />
            <Center flex="1" h="full">
              {children}
            </Center>
            <Box h={["24"]}></Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={[12, null, null, 4]} display={["none", ...generateNull(5), "block"]}>
          <Box bgColor="#1C1C1C" h="full" />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

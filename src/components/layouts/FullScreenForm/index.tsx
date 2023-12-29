"use client";

import React, { FC } from "react";

import { Box, Center, GridItem, SimpleGrid } from "@chakra-ui/react";

function GenerateNull(length: number): null[] {
  const arr: null[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(null);
  }
  return arr;
}

interface FullScreenFormLayoutProps {
  title: string;
  children: React.ReactNode;
  rightTopComponent?: React.ReactNode;
}

export const FullScreenFormLayout: FC<FullScreenFormLayoutProps> = ({ children }) => {
  return (
    <Box h="100vh">
      <SimpleGrid columns={12} h="full">
        <GridItem colSpan={[12, ...GenerateNull(5), 8]}>
          <Center flex="1" h="full">
            {children}
          </Center>
        </GridItem>
        <GridItem colSpan={[12, null, null, 4]} display={["none", ...GenerateNull(5), "block"]}>
          <Box bgColor="#1C1C1C" h="full" />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
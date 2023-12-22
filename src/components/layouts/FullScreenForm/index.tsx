"use client";

import React, { FC } from "react";

import { Box, Center, GridItem, SimpleGrid } from "@chakra-ui/react";

interface FullScreenFormLayoutProps {
  title: string;
  children: React.ReactNode;
  rightTopComponent?: React.ReactNode;
}

export const FullScreenFormLayout: FC<FullScreenFormLayoutProps> = ({ children }) => {
  return (
    <Box h="100vh">
      <SimpleGrid columns={12} h="full">
        <GridItem colSpan={[12, null, null, 8]}>
          <Center flex="1" h="full">
            {children}
          </Center>
        </GridItem>
        <GridItem colSpan={[12, null, null, 4]} display={["none", null, null, "block"]}>
          <Box bgColor="#1C1C1C" h="full" />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
"use client";

import React, { FC } from "react";

import Link from "next/link";

import { Box, Center, Flex, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

interface FullScreenFormLayoutProps {
  title: string;
  children: React.ReactNode;
  rightTopComponent?: React.ReactNode;
}

export const FullScreenFormLayout: FC<FullScreenFormLayoutProps> = ({ rightTopComponent, children, title }) => {
  return (
    <Box h="100vh">
      <SimpleGrid columns={12} h="full">
        <GridItem colSpan={[12, null, null, 8]}>
          <Stack h="full" px={["4", null, null, "12"]} py="4" spacing="6">
            <Box h="32">
              <Flex alignItems="center" justifyContent="space-between">
                <Link href="/">
                  <Image alt="" src="assets/logo.svg" userSelect="none" w="52" />
                </Link>
                {rightTopComponent}
              </Flex>
            </Box>
            <Center flex="1">{children}</Center>
            <Box h="32" />
          </Stack>
        </GridItem>
        <GridItem colSpan={[12, null, null, 4]} display={["none", null, null, "block"]}>
          <Box bgColor="#1C1C1C" h="full" />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
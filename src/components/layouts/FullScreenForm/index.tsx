"use client";

import React, { FC } from "react";

import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";

interface FullScreenFormLayoutProps {
  title: string;
  children: React.ReactNode;
  rightTopComponent?: React.ReactNode;
}

export const FullScreenFormLayout: FC<FullScreenFormLayoutProps> = ({ rightTopComponent, children, title }) => {
  return (
    <Box h="100vh">
      <Stack h="full" px="12" py="4" spacing="6">
        <Box h="32">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Text fontSize="3xl" fontWeight="semibold">
                {title}
              </Text>
            </Box>
            {rightTopComponent}
          </Flex>
        </Box>
        <Center flex="1">{children}</Center>
        <Box h="32" />
      </Stack>
    </Box>
  );
};

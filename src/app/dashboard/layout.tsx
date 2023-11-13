"use client";

import { Box, Flex } from "@chakra-ui/react";

import { Sidebar } from "./layout/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box h="100vh" w="100vw">
      <Flex h="full">
        <Sidebar />
        {children}
      </Flex>
    </Box>
  );
}

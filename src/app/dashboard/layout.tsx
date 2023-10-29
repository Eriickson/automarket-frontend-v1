"use client";

import { Box, Flex } from "@chakra-ui/react";

import { Sidebar } from "./layout/Sidebar";
import { SidebarMenu } from "./layout/SidebarMenu";
import { Content } from "./layout/Content";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box h="100vh" w="100vw">
      <Flex h="full">
        <Sidebar />
        <SidebarMenu />
        <Content>{children}</Content>
      </Flex>
    </Box>
  );
}

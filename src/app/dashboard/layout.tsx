import React from "react";

import { Box, Divider, Flex, Stack } from "@chakra-ui/react";

import { GlobalHeader } from "@/components/organisms/GlobalHeader";

import { ContentPanel } from "./ContentPanel";
import { SidebarLeft } from "./SidebarLeft";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box h="100vh" maxH="100vh" overflowX="hidden">
      <Stack h="full">
        <GlobalHeader />
        <Box flex="1" overflowY="auto" px="12">
          <Flex alignItems="flex-start" h="full">
            <Box h="full" w="sm">
              <SidebarLeft />
            </Box>
            <Divider mx="4" orientation="vertical" />
            <Box flex="1" h="full">
              <ContentPanel>{children}</ContentPanel>
            </Box>
          </Flex>
        </Box>
        <Box />
      </Stack>
    </Box>
  );
};

export default DashboardLayout;

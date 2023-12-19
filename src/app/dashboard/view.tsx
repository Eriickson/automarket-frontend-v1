import React from "react";

import { Box, HStack, Stack } from "@chakra-ui/react";

import { GlobalHeader } from "@/components/organisms/GlobalHeader";

import { ContentPanel } from "./ContentPanel";
import { SidebarLeft } from "./SidebarLeft";

export const DashboardView = () => {
  return (
    <Box h="100vh" maxH="100vh">
      <Stack h="full">
        <GlobalHeader />
        <Box flex="1" px="12">
          <HStack alignItems="flex-start" h="full">
            <Box h="full" w="sm">
              <SidebarLeft />
            </Box>
            <Box flex="1" h="full">
              <ContentPanel />
            </Box>
          </HStack>
        </Box>
        <Box />
      </Stack>
    </Box>
  );
};

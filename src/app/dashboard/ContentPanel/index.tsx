import React, { FC } from "react";

import { Box, HStack, Stack } from "@chakra-ui/react";

import { SidebarRight } from "../SidebarRight";
import { Footer } from "./Footer";

interface ContentPanelProps {
  children: React.ReactNode;
}

export const ContentPanel: FC<ContentPanelProps> = ({ children }) => {
  return (
    <Box h="full">
      <Stack h="full">
        <HStack alignItems="flex-start" flex="1" overflow="hidden">
          <Box flex="1" h="full">
            <Box flex="1" h="full">
              <Box h="full" maxH="full" overflowY="auto" p="2">
                {children}
              </Box>
            </Box>
          </Box>
          <Box display={["none", null, null, null, null, "block"]}>
            <SidebarRight />
          </Box>
        </HStack>
        <Footer />
      </Stack>
    </Box>
  );
};

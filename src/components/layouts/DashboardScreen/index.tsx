import React, { FC } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { GlobalHeader } from "@/components/organisms/GlobalHeader";

import { TabbarNavigation } from "./TabbarNavigation";

interface DashboardScreenLayoutProps {
  children: React.ReactNode;
}

export const DashboardScreenLayout: FC<DashboardScreenLayoutProps> = ({ children }) => {
  return (
    <Flex flexDirection="column" minH="100dvh">
      <GlobalHeader />
      <Box my="2">
        <TabbarNavigation />
        <Box flex="1">{children}</Box>
      </Box>
    </Flex>
  );
};

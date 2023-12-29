import React, { FC } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { GlobalFooter } from "@/components/organisms/GlobalFooter";
import { GlobalHeader } from "@/components/organisms/GlobalHeader";

interface EcommerceLayoutProps {
  children: React.ReactNode;
}

export const EcommerceLayout: FC<EcommerceLayoutProps> = ({ children }) => {
  return (
    <Flex flexDirection="column" minH="100dvh">
      <GlobalHeader />
      <Box flex="1">{children}</Box>
      <GlobalFooter />
    </Flex>
  );
};

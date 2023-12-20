import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { GlobalFooter } from "@/components/organisms/GlobalFooter/GlobalFooter";
import { GlobalHeader } from "@/components/organisms/GlobalHeader";

const HomePage = () => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <GlobalHeader />
      <Box flex="1">Content</Box>
      <GlobalFooter />
    </Flex>
  );
};

export default HomePage;

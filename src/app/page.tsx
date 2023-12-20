import React from "react";

import { AspectRatio, Box, Center, Flex, Image } from "@chakra-ui/react";

import { GlobalFooter } from "@/components/organisms/GlobalFooter/GlobalFooter";
import { GlobalHeader } from "@/components/organisms/GlobalHeader";

import { JoinOurPlatform } from "./JoinOurPlatform";

const HomePage = () => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <GlobalHeader />
      <Flex flex="1" flexDirection="column" justifyContent="space-between">
        <Center>
          <Box w="1600px">Hola a todos</Box>
        </Center>
        <JoinOurPlatform />
      </Flex>
      <GlobalFooter />
    </Flex>
  );
};

export default HomePage;

import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { CopyrightMark } from "./CopyrightMark";
import { SocialMediaButtons } from "./SocialMediaButtons";

export const BottomSession = () => {
  return (
    <Box pb="4" pt="2" px="12">
      <Flex justifyContent="space-between">
        <CopyrightMark />
        <SocialMediaButtons />
      </Flex>
    </Box>
  );
};

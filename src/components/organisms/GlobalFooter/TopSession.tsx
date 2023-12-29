import React from "react";

import { Box, Flex, HStack } from "@chakra-ui/react";

import { LogoPresentation } from "@/components/atoms/LogoPresentation";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { generateNull } from "@/utils";

import { OverviewMenu } from "./OverviewMenu";
import { RightSession } from "./RightSession";
import { SocialMediaButtons } from "./SocialMediaButtons";

export const TopSession = () => {
  return (
    <ScreenAreaDelimiter>
      <Flex alignItems="center" justifyContent="space-between">
        <HStack spacing={["6"]}>
          <LogoPresentation />
          <Box display={["none", ...generateNull(4), "block"]}>
            <OverviewMenu />
          </Box>
        </HStack>
        <Box display={["block", ...generateNull(4), "none"]}>
          <SocialMediaButtons />
        </Box>
        <Box display={["none", ...generateNull(4), "block"]}>
          <RightSession />
        </Box>
      </Flex>
    </ScreenAreaDelimiter>
  );
};

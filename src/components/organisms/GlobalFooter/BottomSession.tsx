import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { generateNull } from "@/utils";

import { CopyrightMark } from "./CopyrightMark";
import { SocialMediaButtons } from "./SocialMediaButtons";

export const BottomSession = () => {
  return (
    <Box pb={["3"]}>
      <ScreenAreaDelimiter>
        <Flex alignItems="center" justifyContent={["center", ...generateNull(4), "space-between"]}>
          <CopyrightMark />
          <Box display={["none", ...generateNull(4), "inline-block"]}>
            <SocialMediaButtons />
          </Box>
        </Flex>
      </ScreenAreaDelimiter>
    </Box>
  );
};

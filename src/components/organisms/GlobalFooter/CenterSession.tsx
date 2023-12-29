import React from "react";

import { Box, HStack, Stack } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { generateNull } from "@/utils";

import { OverviewMenu } from "./OverviewMenu";
import { RightSession } from "./RightSession";

export const CenterSession = () => {
  return (
    <Box display={["block", ...generateNull(4), "none"]}>
      <ScreenAreaDelimiter>
        <Stack alignItems="flex-start" flexDir={["column", null]} spacing={["4"]}>
          <OverviewMenu />
          <RightSession />
        </Stack>
      </ScreenAreaDelimiter>
    </Box>
  );
};

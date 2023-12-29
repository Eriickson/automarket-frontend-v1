import React from "react";

import { Box, Divider, Flex, HStack, Stack } from "@chakra-ui/react";

import { LogoPresentation } from "@/components/atoms/LogoPresentation";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { generateNull } from "@/utils";

import { CopyrightMark } from "./CopyrightMark";
import { OverviewMenu } from "./OverviewMenu";
import { RightSession } from "./RightSession";
import { SocialMediaButtons } from "./SocialMediaButtons";

export const GlobalFooter = () => {
  return (
    <Stack px={[...generateNull(4), "4"]} spacing="4">
      <Divider borderColor="gray.300" />
      <ScreenAreaDelimiter>
        <Stack direction={["column"]} mb="4" spacing={["4", null, null, "6"]} w="full">
          <Flex alignItems="center" justifyContent="space-between">
            <LogoPresentation />
            <SocialMediaButtons />
          </Flex>
        </Stack>
        <HStack alignItems="flex-start" spacing={["8"]}>
          <OverviewMenu />
          <RightSession />
        </HStack>
        <Divider borderColor="gray.300" my="4" />
        <Box pb={["3"]}>
          <CopyrightMark />
        </Box>
      </ScreenAreaDelimiter>
    </Stack>
  );
};

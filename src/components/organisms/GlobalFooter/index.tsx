import React from "react";

import { Divider, Stack } from "@chakra-ui/react";

import { generateNull } from "@/utils";

import { BottomSession } from "./BottomSession";
import { CenterSession } from "./CenterSession";
import { TopSession } from "./TopSession";

export const GlobalFooter = () => {
  return (
    <Stack px={[...generateNull(4), "4"]} spacing="4">
      <Divider borderColor="gray.300" />
      <TopSession />
      <Divider borderColor="gray.300" display={[...generateNull(5), "none"]} />
      <CenterSession />
      <Divider borderColor="gray.300" />
      <BottomSession />
    </Stack>
  );
};

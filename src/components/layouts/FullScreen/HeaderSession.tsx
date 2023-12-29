import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { LogoPresentation } from "@/components/atoms/LogoPresentation";
import { generateNull } from "@/utils";

export const HeaderSession = () => {
  return (
    <Box border="1px" h={["16", ...generateNull(5), "20"]} px={["2", ...generateNull(5), "6"]}>
      <Flex alignItems="center" h="full">
        <LogoPresentation />
      </Flex>
    </Box>
  );
};

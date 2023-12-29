import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { LogoPresentation } from "@/components/atoms/LogoPresentation";
import { generateNull } from "@/utils";

export const HeaderSession = () => {
  return (
    <Box h={["16", ...generateNull(5), "20"]} px={["2", ...generateNull(5), "6"]}>
      <Flex alignItems="center" h="full" justifyContent="space-between">
        <LogoPresentation />
        <Button colorScheme="primary" variant="link">
          Crea tu cuenta
        </Button>
      </Flex>
    </Box>
  );
};

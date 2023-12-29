import React, { FC } from "react";

import { Box, Center } from "@chakra-ui/react";

type MaxWidthValues = "1920" | "1440" | "640" | "480";

interface ScreenAreaDelimiterProps {
  maxWidth?: MaxWidthValues;
  children: React.ReactNode;
}

export const ScreenAreaDelimiter: FC<ScreenAreaDelimiterProps> = ({ maxWidth, children }) => {
  return (
    <Center w="full">
      <Box maxW={maxWidth} w="full">
        <Box px={["2", null, "4", null, "0"]}>{children}</Box>
      </Box>
    </Center>
  );
};

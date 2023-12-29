import React, { FC } from "react";

import { Box, Center } from "@chakra-ui/react";

type MaxWidthValues = "1920" | "640";

interface ScreenAreaDelimiterProps {
  maxWidth?: MaxWidthValues;
  children: React.ReactNode;
}

export const ScreenAreaDelimiter: FC<ScreenAreaDelimiterProps> = ({ maxWidth, children }) => {
  return (
    <Center w="full">
      <Box maxW={maxWidth} w="full">
        <Box px={["2", null, null, 4, "12"]}>{children}</Box>
      </Box>
    </Center>
  );
};

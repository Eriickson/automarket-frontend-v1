import React, { FC } from "react";

import { Box, Center } from "@chakra-ui/react";

type MaxWidthValues = "1920" | "1440" | "640" | "480";

interface ScreenAreaDelimiterProps {
  maxWidth?: MaxWidthValues;
  children: React.ReactNode;
  withoutPadding?: boolean;
}

export const ScreenAreaDelimiter: FC<ScreenAreaDelimiterProps> = ({ withoutPadding, maxWidth, children }) => {
  return (
    <Center w="full">
      <Box maxW={maxWidth} w="full">
        <Box px={withoutPadding ? undefined : ["2", null, "4", null, "0"]}>{children}</Box>
      </Box>
    </Center>
  );
};

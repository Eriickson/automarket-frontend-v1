import React, { FC } from "react";

import { Box, Center } from "@chakra-ui/react";

type MaxWidthValues = "1920" | "1440" | "640" | "480";

type HeightValues = "full" | "auto";

interface ScreenAreaDelimiterProps {
  maxWidth?: MaxWidthValues;
  height?: HeightValues;
  children: React.ReactNode;
  withoutPadding?: boolean;
}

export const ScreenAreaDelimiter: FC<ScreenAreaDelimiterProps> = ({ withoutPadding, maxWidth, height, children }) => {
  return (
    <Center height={height} id="center" w="full">
      <Box height={height} maxW={maxWidth} w="full">
        <Box height={height} px={withoutPadding ? undefined : ["2", null, "4", null, "0"]}>
          {children}
        </Box>
      </Box>
    </Center>
  );
};

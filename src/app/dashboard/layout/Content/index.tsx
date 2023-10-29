import React, { FC } from "react";

import { Box } from "@chakra-ui/react";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <Box flex="1" overflow="auto">
      <Box h="full" /* pl="8" pt="8" pr="8" */>{children}</Box>
    </Box>
  );
};

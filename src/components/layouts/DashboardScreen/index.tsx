import React, { FC } from "react";

import { Box, HStack } from "@chakra-ui/react";

interface DashboardScreenLayoutProps {
  children: React.ReactNode;
}

export const DashboardScreenLayout: FC<DashboardScreenLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Box>
        <HStack>
          <Box p="4">
            <Box>
              <Box h="12" w="12" />
            </Box>
          </Box>
          <Box>Hola</Box>
          <Box>{children}</Box>
        </HStack>
      </Box>
    </Box>
  );
};

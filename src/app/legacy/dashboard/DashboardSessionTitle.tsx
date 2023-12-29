import React, { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

interface DashboardSessionTitleProps {
  title: string;
  subtitle: string;
}

export const DashboardSessionTitle: FC<DashboardSessionTitleProps> = ({ subtitle, title }) => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="semibold">
        {title}
      </Text>
      <Text maxW="4xl">{subtitle}</Text>
    </Box>
  );
};

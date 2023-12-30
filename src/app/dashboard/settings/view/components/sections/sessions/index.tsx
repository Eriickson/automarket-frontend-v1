import React from "react";

import { Box, Text } from "@chakra-ui/react";

import { SessionList } from "./SessionList";

export const SessionsSection = () => {
  return (
    <Box>
      <Text fontSize="md" fontWeight="semibold" mx="2">
        Sesiones activas
      </Text>
      <SessionList />
    </Box>
  );
};

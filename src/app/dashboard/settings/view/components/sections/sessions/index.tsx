import React from "react";

import { Box, List, Text } from "@chakra-ui/react";

import { SessionItem } from "./SessionItem";

export const SessionsSection = () => {
  return (
    <Box>
      <Text fontSize="md" fontWeight="semibold" mx="2">
        Sesiones activas
      </Text>
      <List spacing="1">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <SessionItem isActive={item === 4} key={item} />
        ))}
      </List>
    </Box>
  );
};

"use client";

import React from "react";

import { Box, HStack } from "@chakra-ui/react";

import { IconButton, SimpleTextField } from "@/components/atoms";

import { Search, Settings } from "react-feather";
export const SearchModalButton = () => {
  return (
    <Box pos="relative">
      <HStack>
        <Box flex="1" pos="relative">
          <SimpleTextField backgroundColor="gray.100" pl="9" placeholder="Realizar búsqueda" />
          <Box bottom="2.5" color="primary.500" left="2.5" pos="absolute" zIndex="1">
            <Search size="1.25rem" />
          </Box>
        </Box>
        <IconButton colorScheme="primary">
          <Settings size="1.25rem" />
        </IconButton>
      </HStack>
      <Box inset="0" pos="absolute" zIndex="10" />
    </Box>
  );
};

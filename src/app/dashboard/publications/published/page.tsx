"use client";

import React from "react";

import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import { Table } from "./Table";

const PublishedPublicationsPage = () => {
  return (
    <Stack h="full" spacing="8">
      <Box h="16" bgColor="purple.100" />
      <Box px="8">
        <Text fontSize="2xl" fontWeight="semibold">
          Publicaciones visibles
        </Text>
        <Text>
          Estas son las publicaciones aparecen en la página de inicio de la web y en la sección de publicaciones.
        </Text>
      </Box>
      <Divider />
      <Box overflow="auto" flex="1" px="8">
        <Table />
      </Box>
      <Divider />
      <Box pb="6" px="8">
        <Text fontSize="2xl" fontWeight="semibold">
          Footer
        </Text>
      </Box>
    </Stack>
  );
};

export default PublishedPublicationsPage;

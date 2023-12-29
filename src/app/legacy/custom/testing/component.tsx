"use client";
import React from "react";

import { Box, List, ListItem } from "@chakra-ui/react";

import { provincesApi } from "@/store/features/api/provinces";

export const Component = () => {
  const { data } = provincesApi.useGetProvincesQuery();

  console.log(data?.data?.provinces);

  return (
    <Box m="24">
      <List>
        <ListItem>Provinces Loading</ListItem>
        <ListItem>Municipalities Loading</ListItem>
        <ListItem>Sectors Loading</ListItem>
      </List>
    </Box>
  );
};

"use client";
import React from "react";

import { Box, List, ListItem } from "@chakra-ui/react";

import { municipalitiesApi } from "@/store/features/api/municipalities";
import { provincesApi } from "@/store/features/api/provinces";
import { sectorsApi } from "@/store/features/api/sectors";

export const Component = () => {
  const { data: provinces } = provincesApi.useGetProvincesQuery(null);
  const { data: municipalities } = municipalitiesApi.useGetMunicipalitiesQuery({
    provinceId: "657772a252d291ea36db2b8f",
  });
  const { data: sectors } = sectorsApi.useGetSectorsQuery({
    municipalityId: "657772a752d291ea36db2bfe",
    provinceId: "657772a252d291ea36db2b8f",
  });

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

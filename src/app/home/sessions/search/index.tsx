"use client";
import React from "react";

import { Box } from "@chakra-ui/react";

import { SearchForm } from "./form";

export const SearchSession = () => {
  return (
    <Box>
      <SearchForm onSubmit={async () => {}} />
    </Box>
  );
};

"use client";
import React from "react";

import { Box } from "@chakra-ui/react";

import { authApi } from "@/store/features/api/auth";

const RktPage = () => {
  const { data } = authApi.useCheckFieldAvailabilityQuery({
    field: "email",
    value: "erickson01d@gmail.com",
  });


  return <Box m="48">RktPage - </Box>;
};

export default RktPage;

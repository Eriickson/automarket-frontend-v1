"use client";
import React from "react";


import { Box } from "@chakra-ui/react";
import { jsonPlaceholderApi } from "@/store/features/api/jsonplaceholder";

const RktPage = () => {
  const { data } = jsonPlaceholderApi.useGetTodosQuery({});

  console.log(data);
  
  return <Box m="48">RktPage - </Box>;
};

export default RktPage;

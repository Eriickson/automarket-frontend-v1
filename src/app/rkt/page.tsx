"use client";
import React from "react";

import { useSelector } from "react-redux";

import { Box } from "@chakra-ui/react";

const RktPage = () => {
  const data = useSelector((store) => store.counter);

  return <Box m="48">RktPage - {data.value}</Box>;
};

export default RktPage;

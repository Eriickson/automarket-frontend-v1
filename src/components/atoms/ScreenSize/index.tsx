"use client";
import React from "react";

import { Box, Tag } from "@chakra-ui/react";

import { breakpoints } from "@/themes/breakpoints";

const baseFontSize = 16;

export const ScreenSize = () => {
  const { innerWidth, innerHeight } = window;

  const targetBreakpoint =
    Object.entries(breakpoints).find(([, value]) => {
      const size = Number(value.replace("em", "")) * baseFontSize;
      return innerWidth < size;
    }) || [];

  console.log(targetBreakpoint);

  return (
    <Box left="2" position="absolute" top="2">
      <Tag bgColor="black" color="white" py="1" rounded="sm">
        {targetBreakpoint.at(0)} - {innerWidth} x {innerHeight}
      </Tag>
    </Box>
  );
};

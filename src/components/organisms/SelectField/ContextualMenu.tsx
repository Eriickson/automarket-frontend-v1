"use client";

import React from "react";

import { Box } from "@chakra-ui/react";

import useSelectFieldContext from "./context";
import { InputRepresentation } from "./InputRepresentation";
import { InputSearch } from "./InputSearch";
import { OptionsList } from "./OptionsList";

export const ContextualMenu = () => {
  const { isFocus, boxContainerRef, options, allowSearch } = useSelectFieldContext();

  return (
    <Box position="relative" ref={boxContainerRef}>
      <InputRepresentation />
      <Box
        backgroundColor="white"
        border="1px"
        borderColor="gray.200"
        display={isFocus ? "block" : "none"}
        left="0"
        position="absolute"
        right="0"
        top={["12", null, null, "12"]}
        zIndex="10"
      >
        {options.length === 0 || !allowSearch ? null : <InputSearch />}
        <OptionsList />
      </Box>
    </Box>
  );
};

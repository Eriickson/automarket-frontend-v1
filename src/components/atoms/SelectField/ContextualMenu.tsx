import React from "react";
import { Box } from "@chakra-ui/react";

import useSelectFieldContext from "./context";

import { InputRepresentation } from "./InputRepresentation";
import { InputSearch } from "./InputSearch";
import { OptionsList } from "./OptionsList";

export const ContextualMenu = () => {
  const { isFocus, boxContainerRef, options } = useSelectFieldContext();

  return (
    <Box position="relative" ref={boxContainerRef}>
      <InputRepresentation />
      <Box
        backgroundColor="white"
        position="absolute"
        top="14"
        border="1px"
        borderColor="gray.200"
        shadow="sm"
        left="0"
        right="0"
        display={isFocus ? "block" : "none"}
      >
        {options.length === 0 ? null : <InputSearch />}
        <OptionsList />
      </Box>
    </Box>
  );
};

import React from "react";

import { HStack, IconButton, chakra } from "@chakra-ui/react";

import useSelectFieldContext from "./context";

import { X } from "react-feather";

export const InputSearch = () => {
  const { searchValue, handleChangeSearchValue } = useSelectFieldContext();

  return (
    <HStack as="label" htmlFor="search" px="4" py="2.5" borderBottom="1px" borderColor="gray.200">
      <chakra.input
        value={searchValue}
        autoFocus
        onChange={(e) => handleChangeSearchValue(e.target.value)}
        _placeholder={{ userSelect: "none" }}
        id="search"
        outline="none"
        placeholder="Buscar..."
        w="full"
      />
      <IconButton
        onClick={() => handleChangeSearchValue("")}
        rounded="sm"
        size="xs"
        variant="ghost"
        aria-label="clean input"
      >
        <X size="1rem" />
      </IconButton>
    </HStack>
  );
};

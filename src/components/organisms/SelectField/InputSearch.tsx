import React from "react";

import { HStack, IconButton, chakra } from "@chakra-ui/react";

import useSelectFieldContext from "./context";

import { X } from "react-feather";

export const InputSearch = () => {
  const { searchValue, handleChangeSearchValue } = useSelectFieldContext();

  return (
    <HStack as="label" htmlFor="search" pl="4" pr="3" py="2.5" borderBottom="1px" borderColor="gray.200">
      <chakra.input
        value={searchValue}
        autoFocus
        onChange={(e) => handleChangeSearchValue(e.target.value)}
        _placeholder={{ userSelect: "none" }}
        id="search"
        outline="none"
        placeholder="Buscar..."
        backgroundColor="transparent"
        w="full"
      />
      {searchValue ? (
        <IconButton
          onClick={() => handleChangeSearchValue("")}
          rounded="sm"
          size="xs"
          variant="ghost"
          aria-label="clean input"
        >
          <X size="1rem" />
        </IconButton>
      ) : null}
    </HStack>
  );
};

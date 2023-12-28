import React from "react";

import { chakra, HStack, IconButton } from "@chakra-ui/react";

import { X } from "react-feather";

import useSelectFieldContext from "./context";

export const InputSearch = () => {
  const { searchValue, handleChangeSearchValue } = useSelectFieldContext();

  return (
    <HStack
      as="label"
      borderBottom="1px"
      borderColor="gray.200"
      htmlFor="search"
      pl={["2", null, null, "4"]}
      pr="3"
      py="2.5"
    >
      <chakra.input
        autoFocus
        _placeholder={{ userSelect: "none" }}
        backgroundColor="transparent"
        fontSize={["sm", null, null, "md"]}
        id="search"
        outline="none"
        placeholder="Buscar..."
        value={searchValue}
        w="full"
        onChange={(e) => handleChangeSearchValue(e.target.value)}
      />
      {searchValue ? (
        <IconButton
          aria-label="clean input"
          rounded="sm"
          size="xs"
          variant="ghost"
          onClick={() => handleChangeSearchValue("")}
        >
          <X size="1rem" />
        </IconButton>
      ) : null}
    </HStack>
  );
};

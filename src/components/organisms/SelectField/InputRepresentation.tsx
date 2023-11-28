import React from "react";

import { Box, HStack, IconButton, chakra } from "@chakra-ui/react";

import { ChevronDown, Trash2 } from "react-feather";

import useSelectFieldContext from "./context";
import { SimpleTextField } from "../SimpleTextField";

export const InputRepresentation = () => {
  const {
    inputRepresentationRef,
    allowMultiple,
    isDisabled,
    isFocus,
    valuesSelected,
    handleClearSelectedOptions,
    handleFocus,
  } = useSelectFieldContext();

  return (
    <Box pos="relative">
      <chakra.input h="0" w="0" opacity="0" position="absolute" type="button" onFocus={() => handleFocus(true)} />

      <SimpleTextField
        isDisabled={isDisabled}
        value={
          allowMultiple
            ? valuesSelected.length > 0
              ? `${valuesSelected.length} opciones seleccionadas`
              : ""
            : valuesSelected.find(Boolean)?.label || ""
        }
        _placeholder={{ userSelect: "none" }}
        ref={inputRepresentationRef}
        placeholder="Seleccionar una opción"
        tabIndex={-1}
        borderColor={isFocus ? "primary.500" : undefined}
        ring={isFocus ? "1.5px" : undefined}
        ringColor={isFocus ? "primary.500" : undefined}
        onChange={() => {}}
      />
      <Box
        cursor="pointer"
        onClick={() => handleFocus(true)}
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        left="0"
      />
      <HStack justifyContent="flex-end" w="max-content" pos="absolute" top="3" right="3">
        <IconButton
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            handleClearSelectedOptions();
          }}
          size="xs"
          aria-label="remove all"
          rounded="sm"
          display={allowMultiple && valuesSelected.length > 0 && isFocus ? "flex" : "none"}
        >
          <Trash2 size="1rem" />
        </IconButton>
        <IconButton
          variant="ghost"
          onClick={() => handleFocus(true)}
          size="xs"
          aria-label="remove all"
          rounded="sm"
          _hover={{}}
          _active={{}}
        >
          <ChevronDown size="1rem" />
        </IconButton>
      </HStack>
    </Box>
  );
};

import React from "react";

import { Box, chakra, HStack, IconButton } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms";

import { ChevronDown, Trash2 } from "react-feather";

import useSelectFieldContext from "./context";

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
      <chakra.input h="0" opacity="0" position="absolute" type="button" w="0" onFocus={() => handleFocus(true)} />

      <SimpleTextField
        _placeholder={{ userSelect: "none" }}
        borderColor={isFocus ? "primary.500" : undefined}
        isDisabled={isDisabled}
        placeholder="Seleccionar una opción"
        ref={inputRepresentationRef}
        ring={isFocus ? "1.5px" : undefined}
        ringColor={isFocus ? "primary.500" : undefined}
        tabIndex={-1}
        value={
          allowMultiple
            ? valuesSelected.length > 0
              ? `${valuesSelected.length} opciones seleccionadas`
              : ""
            : valuesSelected.find(Boolean)?.label || ""
        }
        onChange={() => {}}
      />
      <Box
        bottom="0"
        cursor="pointer"
        left="0"
        position="absolute"
        right="0"
        top="0"
        onClick={() => handleFocus(true)}
      />
      <HStack justifyContent="flex-end" pos="absolute" right="3" top="3" w="max-content">
        <IconButton
          aria-label="remove all"
          display={allowMultiple && valuesSelected.length > 0 && isFocus ? "flex" : "none"}
          rounded="sm"
          size="xs"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            handleClearSelectedOptions();
          }}
        >
          <Trash2 size="1rem" />
        </IconButton>
        <IconButton
          _active={{}}
          _hover={{}}
          aria-label="remove all"
          rounded="sm"
          size="xs"
          variant="ghost"
          onClick={() => handleFocus(true)}
        >
          <ChevronDown size="1rem" />
        </IconButton>
      </HStack>
    </Box>
  );
};

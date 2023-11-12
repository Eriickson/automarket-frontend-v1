import React from "react";

import { Box, chakra } from "@chakra-ui/react";

import { SimpleTextField } from "../SimpleTextField";
import useSelectFieldContext from "./context";

export const InputRepresentation = () => {
  const { inputRepresentationRef, allowMultiple, isFocus, valuesSelected, handleFocus } = useSelectFieldContext();

  return (
    <Box pos="relative">
      <chakra.input h="0" w="0" opacity="0" position="absolute" type="button" onFocus={() => handleFocus(true)} />
      <SimpleTextField
        value={
          allowMultiple
            ? valuesSelected.length > 0
              ? `${valuesSelected.length} opciones seleccionadas`
              : "Seleccionar una opción"
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
    </Box>
  );
};

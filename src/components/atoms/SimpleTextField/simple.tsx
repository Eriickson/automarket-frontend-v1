import React, { forwardRef } from "react";

import { Box, Input, InputProps } from "@chakra-ui/react";

import ReactLoading from "react-loading";

export interface SimpleTextFieldProps extends InputProps {
  isLoading?: boolean;
}

export const SimpleTextField = forwardRef<HTMLElement, SimpleTextFieldProps>(({ isLoading, ...props }, ref) => {
  return (
    <Box position="relative">
      <Input
        _disabled={{ bgColor: "gray.50" }}
        _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
        cursor={isLoading ? "wait" : "auto"}
        isDisabled={isLoading}
        isRequired={false}
        pointerEvents={isLoading ? "none" : "auto"}
        px="4"
        py="6"
        rounded="sm"
        userSelect={isLoading ? "none" : "auto"}
        {...props}
        ref={ref}
      />
      {isLoading ? (
        <Box position="absolute" right="4" top="3">
          <ReactLoading color="#cdcdcd" type="bars" width="1.75rem" />
        </Box>
      ) : null}
    </Box>
  );
});

SimpleTextField.displayName = "SimpleTextField";

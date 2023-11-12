import React, { forwardRef } from "react";

import ReactLoading from "react-loading";

import { Box, Input, InputProps } from "@chakra-ui/react";

export interface SimpleTextFieldProps extends InputProps {
  isLoading?: boolean;
}

export const SimpleTextField = forwardRef<HTMLElement, SimpleTextFieldProps>(({ isLoading, ...props }, ref) => {
  return (
    <Box position="relative">
      <Input
        rounded="sm"
        _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
        _disabled={{ bgColor: "gray.50" }}
        py="6"
        isRequired={false}
        isDisabled={isLoading}
        cursor={isLoading ? "wait" : "auto"}
        {...props}
        ref={ref}
      />
      {isLoading ? (
        <Box position="absolute" top="3" right="4">
          <ReactLoading width="1.75rem" color="#cdcdcd" type="bars" />
        </Box>
      ) : null}
    </Box>
  );
});

SimpleTextField.displayName = "SimpleTextField";

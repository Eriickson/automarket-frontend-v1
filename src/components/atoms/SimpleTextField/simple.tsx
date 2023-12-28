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
        _placeholder={{ userSelect: "none" }}
        cursor={isLoading ? "wait" : "auto"}
        fontSize={["sm", null, null, "md"]}
        isDisabled={isLoading}
        pointerEvents={isLoading ? "none" : "auto"}
        px={["2", null, null, "4"]}
        py={["4", null, null, "6"]}
        rounded="sm"
        userSelect={isLoading ? "none" : "auto"}
        {...props}
        isRequired={false}
        ref={ref}
      />
      {isLoading ? (
        <Box position="absolute" right={["2.5", null, null, "4"]} top={["1.5", null, null, "3"]}>
          <ReactLoading color="#cdcdcd" type="bars" width="1.75rem" />
        </Box>
      ) : null}
    </Box>
  );
});

SimpleTextField.displayName = "SimpleTextField";

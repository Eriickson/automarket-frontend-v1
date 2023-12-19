import React, { forwardRef, useState } from "react";

import { Box, Input, InputProps } from "@chakra-ui/react";

import ReactLoading from "react-loading";

export interface SimpleTextFieldProps extends InputProps {
  isLoading?: boolean;
}

export const SimpleTextField = forwardRef<HTMLElement, SimpleTextFieldProps>(({ isLoading, ...props }, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Box position="relative">
      <Input
        _disabled={{ bgColor: "gray.50" }}
        _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
        _placeholder={{ userSelect: "none" }}
        cursor={isLoading ? "wait" : "auto"}
        isDisabled={isLoading}
        pointerEvents={isLoading ? "none" : "auto"}
        px="4"
        py="6"
        rounded="sm"
        userSelect={isLoading ? "none" : "auto"}
        {...props}
        bgColor="white"
        isRequired={false}
        ref={ref}
        zIndex="1"
        // onBlur={() => setIsFocus(false)}
        // onFocus={() => setIsFocus(true)}
      />
      {isFocus ? (
        <Box
          borderColor="primary.700"
          borderStyle="dotted"
          borderWidth="2px"
          inset="-1.5"
          pos="absolute"
          rounded="md"
          zIndex="0"
        />
      ) : null}

      {isLoading ? (
        <Box position="absolute" right="4" top="3">
          <ReactLoading color="#cdcdcd" type="bars" width="1.75rem" />
        </Box>
      ) : null}
    </Box>
  );
});

SimpleTextField.displayName = "SimpleTextField";
// 2px dotted rgb(91, 105, 135)

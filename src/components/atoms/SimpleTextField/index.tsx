import React, { forwardRef } from "react";
import { Input, InputProps } from "@chakra-ui/react";

export interface SimpleTextFieldProps extends InputProps {}

export const SimpleTextField = forwardRef<HTMLElement, SimpleTextFieldProps>(({ ...props }, ref) => {
  return (
    <Input
      rounded="sm"
      _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
      _disabled={{ bgColor: "gray.50" }}
      py="6"
      isRequired={false}
      {...props}
      ref={ref}
    />
  );
});

SimpleTextField.displayName = "SimpleTextField";

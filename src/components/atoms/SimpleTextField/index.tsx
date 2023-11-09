import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React, { FC, forwardRef } from "react";

export interface SimpleTextFieldProps extends InputProps {
  label?: string;
}

export const SimpleTextField = forwardRef<HTMLElement, SimpleTextFieldProps>(({ label, ...props }, ref) => {
  return (
    <FormControl>
      <FormLabel mb="1">{label}</FormLabel>
      <Input _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }} py="6" {...props} ref={ref} />
    </FormControl>
  );
});

SimpleTextField.displayName = "SimpleTextField";
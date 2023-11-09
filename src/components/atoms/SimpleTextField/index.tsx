import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface SimpleTextFieldProps extends InputProps {
  label: string;
}

export const SimpleTextField: FC<SimpleTextFieldProps> = ({ label, ...props }) => {
  return (
    <FormControl>
      <FormLabel mb="1">{label}</FormLabel>
      <Input _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }} py="6" {...props} />
    </FormControl>
  );
};

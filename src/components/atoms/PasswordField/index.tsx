import React, { FC, useState, forwardRef } from "react";

import { Box, Button } from "@chakra-ui/react";

import { SimpleTextField, SimpleTextFieldProps } from "../SimpleTextField";

export interface PasswordFieldProps extends SimpleTextFieldProps {}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({ ...props }, ref) => {
  const [showing, setShowing] = useState(false);

  const handleClick = () => setShowing(!showing);

  return (
    <Box w="full" pos="relative">
      <SimpleTextField pr="16" type={showing ? "text" : "password"} {...props} ref={ref} />
      <Box zIndex="1" bottom="2" right="2" pos="absolute">
        <Button variant="ghost" size="sm" onClick={handleClick}>
          {showing ? "H" : "S"}
        </Button>
      </Box>
      {/* {showing ? <Box h="96" w="10" bgColor="red"></Box> : null} */}
    </Box>
  );
});

PasswordField.displayName = "PasswordField";

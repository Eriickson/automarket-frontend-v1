import React, { useState, forwardRef } from "react";

import { Box, Button } from "@chakra-ui/react";

import { SimpleTextField, SimpleTextFieldProps } from "../SimpleTextField";

export interface PasswordFieldProps extends SimpleTextFieldProps {}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({ isLoading, ...props }, ref) => {
  const [showing, setShowing] = useState(false);

  const handleClick = () => setShowing(!showing);

  return (
    <Box w="full" pos="relative">
      <SimpleTextField isLoading={isLoading} pr="16" type={showing ? "text" : "password"} {...props} ref={ref} />
      {isLoading ? null : (
        <Box zIndex="1" bottom="2" right="2" pos="absolute">
          <Button variant="ghost" size="sm" onClick={handleClick}>
            {showing ? "H" : "S"}
          </Button>
        </Box>
      )}
    </Box>
  );
});

PasswordField.displayName = "PasswordField";

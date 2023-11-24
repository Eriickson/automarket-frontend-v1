import React, { forwardRef, useState } from "react";

import { Box, Button } from "@chakra-ui/react";

import { SimpleTextField, SimpleTextFieldProps } from "../SimpleTextField";

export interface PasswordFieldProps extends SimpleTextFieldProps {}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({ isLoading, ...props }, ref) => {
  const [showing, setShowing] = useState(false);

  const handleClick = () => setShowing(!showing);

  return (
    <Box pos="relative" w="full">
      <SimpleTextField isLoading={isLoading} pr="16" type={showing ? "text" : "password"} {...props} ref={ref} />
      {isLoading ? null : (
        <Box bottom="2" pos="absolute" right="2" zIndex="1">
          <Button size="sm" variant="ghost" onClick={handleClick}>
            {showing ? "H" : "S"}
          </Button>
        </Box>
      )}
    </Box>
  );
});

PasswordField.displayName = "PasswordField";

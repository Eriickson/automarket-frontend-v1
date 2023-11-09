import React, { FC, useState } from "react";

import { SimpleTextField, SimpleTextFieldProps } from "../SimpleTextField";

import { Box, Button } from "@chakra-ui/react";

interface PasswordFieldProps extends SimpleTextFieldProps {}

export const PasswordField: FC<PasswordFieldProps> = ({ ...props }) => {
  const [showing, setShowing] = useState(false);

  const handleClick = () => setShowing(!showing);

  return (
    <Box w="full" pos="relative">
      <SimpleTextField pr="16" type={showing ? "text" : "password"} {...props} />
      <Box zIndex="1" bottom="2" right="2" pos="absolute">
        <Button variant="ghost" size="sm" onClick={handleClick}>
          {showing ? "H" : "S"}
        </Button>
      </Box>
      {showing ? <Box h="10" w="10" bgColor="red"></Box> : null}
    </Box>
  );
};

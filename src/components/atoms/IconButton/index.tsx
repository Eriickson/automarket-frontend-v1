"use client";
import React, { FC } from "react";

import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from "@chakra-ui/react";

interface IconButtonProps extends ChakraIconButtonProps {}

export const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraIconButton rounded="sm" {...props}>
      {children}
    </ChakraIconButton>
  );
};

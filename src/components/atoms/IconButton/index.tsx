"use client";
import React, { FC } from "react";

import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from "@chakra-ui/react";

interface IconButtonProps extends Omit<ChakraIconButtonProps, "aria-label"> {}

export const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraIconButton aria-label="" rounded="sm" {...props}>
      {children}
    </ChakraIconButton>
  );
};

"use client";
import React, { FC } from "react";

import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton fontSize={["xs"]} rounded="sm" {...props}>
      {children}
    </ChakraButton>
  );
};

"use client";
import React, { FC } from "react";

import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

import { generateNull } from "@/utils";

export interface ButtonProps extends ChakraButtonProps {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton rounded="sm" size={["sm", ...generateNull(5), "md"]} {...props}>
      {children}
    </ChakraButton>
  );
};

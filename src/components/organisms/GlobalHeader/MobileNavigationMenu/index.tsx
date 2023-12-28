import React from "react";

import { IconButton } from "@/components/atoms";

import { Menu } from "react-feather";

export const MobileNavigationMenu = () => {
  return (
    <IconButton aria-label="IconButton" bgColor="gray.200" colorScheme="secondary" size="sm" variant="outline">
      <Menu size="1.25rem" />
    </IconButton>
  );
};

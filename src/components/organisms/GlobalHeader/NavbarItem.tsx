"use client";
import React, { FC, useMemo } from "react";

import { usePathname } from "next/navigation";

import { Box, Link, Text } from "@chakra-ui/react";

export type NavbarItem = {
  label: string;
  href: string;
};

interface NavbarItemProps {
  item: NavbarItem;
}

export const NavbarItem: FC<NavbarItemProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = useMemo(() => item.href === pathname, [pathname, item]);

  return (
    <Link href={item.href} key={item.label}>
      <Box
        borderBottom={isActive ? "2px" : "none"}
        color={isActive ? "primary.500" : undefined}
        fontWeight={isActive ? "bold" : "semibold"}
        px="1"
      >
        <Text userSelect="none">{item.label}</Text>
      </Box>
    </Link>
  );
};

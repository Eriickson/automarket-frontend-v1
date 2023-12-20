"use client";

import React, { FC, useMemo } from "react";

import { usePathname, useRouter } from "next/navigation";

import { HStack, ListItem, Text } from "@chakra-ui/react";

export type NavbarItem = {
  label: string;
  Icon: FC;
  pathname: string;
};

export interface NavbarItemProps {
  item: NavbarItem;
}

export const NavbarItem: FC<NavbarItemProps> = ({ item }) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const isActive = useMemo(() => {
    if (pathname === "/dashboard" && item.pathname === "/dashboard") return true;
    if (pathname === item.pathname) return true;
  }, [item, pathname]);

  return (
    <ListItem
      bgColor={isActive ? "primary.500" : "white"}
      color={isActive ? "white" : "black"}
      cursor="pointer"
      fontWeight="semibold"
      px="3"
      py="3"
      rounded="sm"
      onClick={() => push(item.pathname)}
    >
      <HStack>
        <item.Icon />
        <Text userSelect="none">{item.label}</Text>
      </HStack>
    </ListItem>
  );
};

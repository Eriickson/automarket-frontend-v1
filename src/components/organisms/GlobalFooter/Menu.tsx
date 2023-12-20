import React from "react";

import Link from "next/link";

import { HStack, Text } from "@chakra-ui/react";

const menuItems = [
  { label: "Descripción general", href: "/overview" },
  { label: "Características", href: "/" },
  { label: "Planes y Precios", href: "/plans-and-pricing" },
  { label: "Ayuda", href: "/overview/help" },
];

export const Menu = () => {
  return (
    <HStack>
      {menuItems.map((item) => (
        <Link href={item.href} key={item.label}>
          <Text fontWeight="medium">{item.label}</Text>
        </Link>
      ))}
    </HStack>
  );
};

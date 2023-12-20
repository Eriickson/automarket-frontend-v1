import React, { Fragment } from "react";

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
      {menuItems.map((item, i) => (
        <Fragment key={item.label}>
          {i !== 0 ? (
            <Text color="gray.500" fontSize="2xl" fontWeight="black" lineHeight="0" userSelect="none">
              ·
            </Text>
          ) : null}
          <Link href={item.href}>
            <Text fontWeight="medium">{item.label}</Text>
          </Link>
        </Fragment>
      ))}
    </HStack>
  );
};

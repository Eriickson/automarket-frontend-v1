import React, { Fragment } from "react";

import Link from "next/link";

import { List, Stack, Text } from "@chakra-ui/react";

const menuItems = [
  { label: "Características", href: "/" },
  { label: "Servicio al Cliente", href: "/legal/support" },
  { label: "Planes y Precios", href: "/plans-and-pricing" },
  { label: "Ayuda", href: "/overview/help" },
];

export const OverviewMenu = () => {
  return (
    <List>
      <Text fontSize="sm" fontWeight="semibold" mb="2.5">
        Descripción general
      </Text>
      <Stack spacing="1">
        {menuItems.map((item, i) => (
          <Fragment key={item.label}>
            {i !== 0 ? (
              <Text
                color="gray.500"
                display={["none", null, null]}
                fontSize="2xl"
                fontWeight="black"
                lineHeight="0"
                userSelect="none"
              >
                ·
              </Text>
            ) : null}
            <Link href={item.href}>
              <Text fontSize={["xs"]} fontWeight="medium" textDecoration="underline">
                {item.label}
              </Text>
            </Link>
          </Fragment>
        ))}
      </Stack>
    </List>
  );
};

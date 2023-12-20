import React, { Fragment } from "react";

import Link from "next/link";

import { HStack, List, ListItem, Text } from "@chakra-ui/react";

const items = [
  {
    title: "Políticas de Privacidad",
    href: "/legal/privacy-policies",
  },
  {
    title: "Términos y Condiciones",
    href: "/legal/terms-and-conditions",
  },
  {
    title: "Servicio al Cliente",
    href: "/legal/support",
  },
];

export const RightSession = () => {
  return (
    <List>
      <HStack spacing="3">
        {items.map((item, i) => (
          <Fragment key={i}>
            {i !== 0 ? (
              <Text fontSize="2xl" fontWeight="black" lineHeight="0" userSelect="none">
                ·
              </Text>
            ) : null}
            <Link href={item.href}>
              <ListItem cursor="pointer">
                <Text fontWeight="medium">{item.title}</Text>
              </ListItem>
            </Link>
          </Fragment>
        ))}
      </HStack>
    </List>
  );
};

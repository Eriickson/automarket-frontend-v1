import React, { Fragment } from "react";

import Link from "next/link";

import { HStack, List, ListItem, Stack, Text } from "@chakra-ui/react";

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
      <Text fontSize="sm" fontWeight="semibold" mb="2.5">
        Apartado legal
      </Text>
      <Stack spacing="1">
        {items.map((item, i) => (
          <Fragment key={i}>
            {i !== 0 ? (
              <Text
                color="gray.500"
                display={["none"]}
                fontSize="2xl"
                fontWeight="black"
                lineHeight="0"
                userSelect="none"
              >
                ·
              </Text>
            ) : null}
            <Link href={item.href}>
              <ListItem cursor="pointer">
                <Text fontSize={["xs"]} fontWeight="medium" textDecoration="underline">
                  {item.title}
                </Text>
              </ListItem>
            </Link>
          </Fragment>
        ))}
      </Stack>
    </List>
  );
};

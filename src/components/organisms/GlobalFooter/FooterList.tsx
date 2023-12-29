import React, { FC, Fragment } from "react";

import Link from "next/link";

import { List, ListItem, Stack, Text } from "@chakra-ui/react";

import { generateNull } from "@/utils";
interface FooterListProps {
  title: string;
  items: { label: string; href: string }[];
}

export const FooterList: FC<FooterListProps> = ({ items, title }) => {
  return (
    <List>
      <Text display={[...generateNull(4), "none"]} fontSize="sm" fontWeight="semibold" mb="2.5">
        {title}
      </Text>
      <Stack
        alignItems={[...generateNull(4), "center"]}
        direction={["column", ...generateNull(3), "row"]}
        spacing={["1", ...generateNull(4), "3"]}
      >
        {items.map((item, i) => (
          <Fragment key={i}>
            {i !== 0 ? (
              <Text
                color="gray.500"
                display={["none", ...generateNull(3), "block"]}
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
                <Text
                  fontSize={["xs", ...generateNull(3), "sm"]}
                  fontWeight="medium"
                  maxW={[...generateNull(4), null, "32", "max-content"]}
                  overflow="hidden"
                  textDecoration="underline"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  {item.label}
                </Text>
              </ListItem>
            </Link>
          </Fragment>
        ))}
      </Stack>
    </List>
  );
};

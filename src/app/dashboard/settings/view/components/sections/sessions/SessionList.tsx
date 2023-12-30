import React from "react";

import { List } from "@chakra-ui/react";

import { SessionListItem } from "./SessionItem";

export const SessionList = () => {
  return (
    <List spacing="1">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <SessionListItem isActive={item === 4} key={item} />
      ))}
    </List>
  );
};

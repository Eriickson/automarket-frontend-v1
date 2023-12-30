"use client";

import React from "react";

import { List } from "@chakra-ui/react";

import { PublicationListItem } from "./PublicationListItem";

export const PublicationList = () => {
  return (
    <List spacing="2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
        <PublicationListItem key={item} />
      ))}
    </List>
  );
};

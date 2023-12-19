import React from "react";

import { Flex } from "@chakra-ui/react";

import { BottomSession } from "./BottomSession";
import { Navbar } from "./Navbar";

export const SidebarLeft = () => {
  return (
    <Flex flexDir="column" h="full">
      <Navbar />
      <BottomSession />
    </Flex>
  );
};

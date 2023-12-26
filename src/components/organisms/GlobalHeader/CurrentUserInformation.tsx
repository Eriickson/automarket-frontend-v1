"use client";
import React from "react";

import { Avatar, Badge, Flex, HStack, Text } from "@chakra-ui/react";

import { useSession } from "@/hooks";

export const CurrentUserInformation = () => {
  const { session } = useSession();

  return (
    <HStack>
      <Flex alignItems="flex-end" flexDir="column" userSelect="none">
        <Text as="b">{session?.user.fullName}</Text>
        <Badge colorScheme="primary" variant="solid">
          Administrador
        </Badge>
      </Flex>
      <Avatar />
    </HStack>
  );
};

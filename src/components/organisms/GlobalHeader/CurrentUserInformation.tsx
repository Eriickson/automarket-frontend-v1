"use client";
import React from "react";

import { Avatar, HStack } from "@chakra-ui/react";

import { IconButton } from "@/components/atoms";

import { Bell } from "react-feather";

export const CurrentUserInformation = () => {
  return (
    <HStack>
      <IconButton aria-label="" colorScheme="primary" size="xs" variant="ghost">
        <Bell size="1rem" strokeWidth="3" />
      </IconButton>
      <Avatar
        h="8"
        src="https://encuentracommunitymanager.com/wp-content/uploads/2021/10/Foto-perfil-cuadrada.jpg"
        w="8"
      />
    </HStack>
  );
};

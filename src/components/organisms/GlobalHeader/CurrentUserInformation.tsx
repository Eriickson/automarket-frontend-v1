"use client";
import React from "react";

import { Avatar, HStack } from "@chakra-ui/react";

export const CurrentUserInformation = () => {
  return (
    <HStack>
      <Avatar
        h="10"
        src="https://encuentracommunitymanager.com/wp-content/uploads/2021/10/Foto-perfil-cuadrada.jpg"
        w="10"
      />
    </HStack>
  );
};

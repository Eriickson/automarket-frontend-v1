"use client";
import React from "react";

import { HStack } from "@chakra-ui/react";

import { Button, IconButton } from "@/components/atoms";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { MoreVertical } from "react-feather";

export const ContactInformationBanner = () => {
  return (
    <ScreenAreaDelimiter maxWidth="1440">
      <HStack>
        <IconButton aria-label="" size="sm">
          <MoreVertical size="1.25rem" />
        </IconButton>
        <Button colorScheme="secondary" flex="2">
          Información de contacto
        </Button>
        <Button colorScheme="whatsapp" flex="1">
          Whatsapp
        </Button>
      </HStack>
    </ScreenAreaDelimiter>
  );
};

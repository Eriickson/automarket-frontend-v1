"use client";
import React from "react";

import { HStack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

export const ContactInformationBanner = () => {
  return (
    <ScreenAreaDelimiter maxWidth="1920">
      <HStack>
        <Button colorScheme="secondary" flex="1">
          Información de contacto
        </Button>
        <Button colorScheme="whatsapp" flex="1">
          Whatsapp
        </Button>
      </HStack>
    </ScreenAreaDelimiter>
  );
};

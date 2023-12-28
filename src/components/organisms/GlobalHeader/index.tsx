"use client";

import React from "react";

import Link from "next/link";

import { Box, Flex, HStack, IconButton, Image } from "@chakra-ui/react";

import { Bell } from "react-feather";

import { CurrentUserInformation } from "./CurrentUserInformation";
import { LoginSession } from "./LoginSession";
import { LogoPresentation } from "./LogoPresentation";
import { GlobalHeaderNavBar } from "./NavBar";
import { NewPublicationButton } from "./NewPublicationButton";

export const GlobalHeader = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" px={["4", null, null, "12"]} py={["4", null, null, "6"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <HStack spacing="8">
          <LogoPresentation />
          <GlobalHeaderNavBar />
        </HStack>
        <Box>
          <HStack display={["none"]} spacing="8">
            <HStack>
              <NewPublicationButton />
              <IconButton aria-label="" size="sm">
                <Bell size="1.25rem" />
              </IconButton>
            </HStack>
            <CurrentUserInformation />
          </HStack>
          <LoginSession />
        </Box>
      </Flex>
    </Box>
  );
};

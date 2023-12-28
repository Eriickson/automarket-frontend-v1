"use client";

import React from "react";

import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { Bell } from "react-feather";

import { CurrentUserInformation } from "./CurrentUserInformation";
import { LoginSession } from "./LoginSession";
import { LogoPresentation } from "./LogoPresentation";
import { MobileNavigationMenu } from "./MobileNavigationMenu";
import { GlobalHeaderNavBar } from "./NavBar";
import { NewPublicationButton } from "./NewPublicationButton";

export const GlobalHeader = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" py={["4", null, null, "6"]}>
      <ScreenAreaDelimiter>
        <Flex alignItems="center" justifyContent="space-between">
          <HStack spacing="8">
            <LogoPresentation />
            <GlobalHeaderNavBar />
          </HStack>
          <HStack>
            <HStack display={["none"]} spacing="8">
              <HStack>
                <NewPublicationButton />
                <IconButton aria-label="" size="sm">
                  <Bell size="1.25rem" />
                </IconButton>
              </HStack>
            </HStack>
            <CurrentUserInformation />
            {/* <LoginSession /> */}
            <MobileNavigationMenu />
          </HStack>
        </Flex>
      </ScreenAreaDelimiter>
    </Box>
  );
};

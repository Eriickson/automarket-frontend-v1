"use client";

import React from "react";

import Link from "next/link";

import { Box, Flex, HStack, IconButton, Image } from "@chakra-ui/react";

import { Bell } from "react-feather";

import { CurrentUserInformation } from "./CurrentUserInformation";
import { GlobalHeaderNavBar } from "./NavBar";
import { NewPublicationButton } from "./NewPublicationButton";

export const GlobalHeader = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" px="12" py="6">
      <Flex alignItems="center" justifyContent="space-between">
        <HStack spacing="8">
          <Box>
            <Link href="/">
              <Image alt="" src="/assets/logo.svg" w="52" />
            </Link>
          </Box>
          <GlobalHeaderNavBar />
        </HStack>
        <Box>
          <HStack spacing="8">
            <HStack>
              <NewPublicationButton />
              <IconButton aria-label="" size="sm">
                <Bell size="1.25rem" />
              </IconButton>
            </HStack>
            <CurrentUserInformation />
          </HStack>
          {/* <HStack>
            <Link href="/create-an-account">
              <Button colorScheme="primary" rounded="sm">
                Crea tu cuenta
              </Button>
            </Link>
            <Link href="/signin">
              <Button bgColor="gray.200" colorScheme="secondary" rounded="sm" variant="ghost">
                Iniciar Sesión
              </Button>
            </Link>
          </HStack> */}
        </Box>
      </Flex>
    </Box>
  );
};

"use client";
import React, { Fragment } from "react";

import Image from "next/image";

import { AspectRatio, Box, Flex, HStack, List, ListItem, Stack, Text } from "@chakra-ui/react";

import { IconButton } from "@/components/atoms";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { Trash2 } from "react-feather";

export const PublicationsSavedView = () => {
  return (
    <Stack py="2" spacing={4}>
      <ScreenAreaDelimiter maxWidth="1440">
        <Text fontWeight="semibold" mb="2">
          25 Publicaciones guardadas
        </Text>
        <List spacing="2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
            <Fragment key={item}>
              <ListItem>
                <HStack alignItems="flex-start" spacing="1.5">
                  <Box flex="2" position="relative">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        alt="A car"
                        height="600"
                        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="800"
                      />
                    </AspectRatio>
                    <Box position="absolute" right="0" top="0">
                      <IconButton
                        aria-label=""
                        backgroundColor="#000000ae"
                        color="gray.200"
                        colorScheme="blackAlpha"
                        rounded="sm"
                        size="xs"
                        variant="ghost"
                      >
                        <Trash2 size="1rem" />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box flex="3">
                    <Flex flexDirection="column" justifyContent="space-between" mb="2">
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        maxW="48"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        Toyota Corolla ES
                      </Text>
                      <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                          RD$ 900,000
                        </Text>
                        <Text fontSize="xs" fontWeight="medium" mb="0.5">
                          •
                        </Text>

                        <Text fontSize="sm" fontWeight="medium">
                          100,000 km
                        </Text>
                      </HStack>
                    </Flex>
                    <Text fontSize="xs">Agregado el 12 de octubre de 2021</Text>
                  </Box>
                </HStack>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </ScreenAreaDelimiter>
    </Stack>
  );
};

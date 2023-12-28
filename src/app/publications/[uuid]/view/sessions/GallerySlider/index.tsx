import React from "react";

import { AspectRatio, Box, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";

import { ArrowLeft, ArrowRight } from "react-feather";

export const GallerySliderSession = () => {
  return (
    <Stack>
      <AspectRatio overflow="hidden" ratio={18 / 9} rounded="lg">
        <Box position="relative">
          <Image
            alt=""
            src="https://images.unsplash.com/photo-1666950213034-fdff64cecf6a?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Box bottom="2" left="2" pos="absolute" right="2" zIndex="1">
            <HStack justifyContent="center">
              <IconButton aria-label="" size="sm" variant="ghost">
                <ArrowLeft />
              </IconButton>
              <Text bgColor="#000000b0" color="white" fontWeight="semibold" px="2" py="1">
                01/15
              </Text>
              <IconButton aria-label="" size="sm" variant="ghost">
                <ArrowRight />
              </IconButton>
            </HStack>
          </Box>
        </Box>
      </AspectRatio>
      <HStack spacing="2.5">
        <Box bgColor="gray.200" h="32" rounded="lg" w="48"></Box>
        <Box bgColor="gray.200" h="32" rounded="lg" w="48"></Box>
        <Box bgColor="gray.200" h="32" rounded="lg" w="48"></Box>
        <Box bgColor="gray.200" h="32" rounded="lg" w="48"></Box>
        <Box bgColor="gray.200" h="32" rounded="lg" w="48"></Box>
      </HStack>
    </Stack>
  );
};

import React from "react";

import Image from "next/image";

import { HStack, Image as ChakraImage, Text } from "@chakra-ui/react";
import { AspectRatio, Box } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
export const BannerPresentation = () => {
  return (
    <ScreenAreaDelimiter withoutPadding maxWidth="1440">
      <Box pos="relative">
        <AspectRatio ratio={[16 / 9, null, null, 2.68 / 1]}>
          <Image
            alt=""
            height={600}
            src="https://images.unsplash.com/photo-1628846231746-b4ed87a0abef?q=80&w=4288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={800}
          />
        </AspectRatio>
        <Box bottom="-14" left="2" pos="absolute">
          <HStack alignItems="flex-end">
            <AspectRatio
              border="4px"
              borderColor="secondary.500"
              h={["32", null, null, null, "36"]}
              overflow="hidden"
              ratio={1 / 1}
              rounded="md"
              w={["32", null, null, null, "36"]}
            >
              <ChakraImage
                alt=""
                src="https://www.shutterstock.com/image-vector/sport-car-logo-design-automotive-600nw-1967120719.jpg"
              />
            </AspectRatio>
            <Box mb="2.5">
              <Text fontWeight="semibold" lineHeight="1">
                Erickson Auto Import
              </Text>
              <Text color="gray.500" fontSize="sm">
                Los mejores autos al mejor precio.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ScreenAreaDelimiter>
  );
};

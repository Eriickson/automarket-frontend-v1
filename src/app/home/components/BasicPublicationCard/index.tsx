import React, { FC } from "react";

import { AspectRatio, Box, Image, Text } from "@chakra-ui/react";

interface BasicPublicationCardProps {
  src: string;
}

export const BasicPublicationCard: FC<BasicPublicationCardProps> = ({ src }) => {
  return (
    <Box>
      <Box pos="relative">
        <AspectRatio ratio={16 / 9}>
          <Box cursor="pointer" overflow="hidden">
            <Image alt="" rounded="lg" src={src} userSelect="none" w="full" />
          </Box>
        </AspectRatio>
        <Box
          bgColor="#00000086"
          bottom={["0.5", null, null, "1.5"]}
          left={["0.5", null, null, "1.5"]}
          pos="absolute"
          px="1.5"
          py="0.5"
          rounded="sm"
        >
          <Text color="white" fontSize={"2xs"} userSelect="none">
            RD$ 995,000
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize={["2xs"]} fontWeight="semibold">
          Toyota Corolla - 2023
        </Text>
      </Box>
    </Box>
  );
};

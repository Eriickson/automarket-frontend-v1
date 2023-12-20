import React from "react";

import { Box, Flex, HStack, Image } from "@chakra-ui/react";

const socialMedia = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    name: "Instagram",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    name: "Facebook",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png",
    name: "X",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    name: "Youtube",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3991/3991775.png",
    name: "Linkedin",
  },
];

export const BottomSession = () => {
  return (
    <Box pb="4" pt="2" px="12">
      <Flex justifyContent="space-between">
        <Box>
          <Box>© {new Date().getFullYear()} automarket.agency. Todos los derechos reservados.</Box>
        </Box>
        <HStack spacing="4">
          {socialMedia.map((item) => (
            <Image
              _hover={{ filter: "grayscale(0)" }}
              alt=""
              cursor="pointer"
              filter="grayscale(1)"
              key={item.name}
              src={item.icon}
              transition="all 0.1s ease-in-out"
              w="8"
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

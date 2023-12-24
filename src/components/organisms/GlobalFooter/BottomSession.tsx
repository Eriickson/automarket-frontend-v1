import React from "react";

import { Box, Flex, HStack, Image } from "@chakra-ui/react";

const socialMedia = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077042.png",
    name: "Instagram",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1051/1051360.png",
    name: "Facebook",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/11823/11823292.png",
    name: "X",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077046.png",
    name: "Youtube",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1236/1236849.png",
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

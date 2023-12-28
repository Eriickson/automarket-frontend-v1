import React from "react";

import { Box, HStack, Image } from "@chakra-ui/react";

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
export const SocialMediaButtons = () => {
  return (
    <HStack spacing={["2", null, null, "4"]}>
      {socialMedia.map((item) => (
        <Box key={item.name} p="0.5">
          <Image
            _hover={{ filter: "grayscale(0)" }}
            alt=""
            cursor="pointer"
            filter="grayscale(1)"
            src={item.icon}
            transition="all 0.1s ease-in-out"
            w={["5", null, null, "8"]}
          />
        </Box>
      ))}
    </HStack>
  );
};

"use client";
import React from "react";

import { HStack, Image } from "@chakra-ui/react";

import { IconButton } from "@/components/atoms";

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
    <HStack spacing={["1", null, null, "4"]}>
      {socialMedia.map((item) => (
        <IconButton aria-label="" key={item.name} rounded="sm" size="sm" variant="ghost">
          <Image
            _hover={{ filter: "grayscale(0)" }}
            alt=""
            cursor="pointer"
            filter="grayscale(1)"
            src={item.icon}
            transition="all 0.1s ease-in-out"
            w={["5", null, "6", null, "6"]}
          />
        </IconButton>
      ))}
    </HStack>
  );
};

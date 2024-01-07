import React from "react";

import Image from "next/image";

import { AspectRatio } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

export const AdvertisingPostersSession = () => {
  return (
    <ScreenAreaDelimiter>
      <AspectRatio overflow="hidden" ratio={16 / 9} rounded="sm">
        <Image
          alt=""
          height={800}
          src="https://images.unsplash.com/photo-1606423495016-ba6a0b33c0ca?q=80&w=3812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={800}
        />
      </AspectRatio>
    </ScreenAreaDelimiter>
  );
};

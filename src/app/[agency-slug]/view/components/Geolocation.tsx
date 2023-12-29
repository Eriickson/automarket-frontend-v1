import React from "react";

import { AspectRatio, Image } from "@chakra-ui/react";

import { HeaderSession } from "@/app/legacy/home/components/header-session";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

export const GeolocationMap = () => {
  return (
    <ScreenAreaDelimiter maxWidth="1440">
      <HeaderSession title="Ubicación" />
      <AspectRatio ratio={16 / 9}>
        <Image src="https://www.google.com/maps/d/u/0/thumbnail?mid=1UjQcW_DHKtWOssS9HgZQbLzGUBg&hl=en" />
      </AspectRatio>
    </ScreenAreaDelimiter>
  );
};

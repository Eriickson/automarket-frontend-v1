import React from "react";

import { AspectRatio, Image } from "@chakra-ui/react";

import { GallerySectionHeader } from "@/components/atoms/GallerySectionHeader";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

export const GeolocationMap = () => {
  return (
    <ScreenAreaDelimiter maxWidth="1440">
      <GallerySectionHeader title="Ubicación" />
      <AspectRatio ratio={16 / 9}>
        <Image src="https://www.google.com/maps/d/u/0/thumbnail?mid=1UjQcW_DHKtWOssS9HgZQbLzGUBg&hl=en" />
      </AspectRatio>
    </ScreenAreaDelimiter>
  );
};

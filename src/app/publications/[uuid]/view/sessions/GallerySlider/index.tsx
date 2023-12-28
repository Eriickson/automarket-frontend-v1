import React from "react";

import { Box, Stack } from "@chakra-ui/react";

import { ThumbsSwiper } from "@/components/organisms/ThumbsSwiper";

import { PublicationMetadata } from "../PublicationMetadata";

export const GallerySliderSession = () => {
  return (
    <Stack spacing="1.5">
      <ThumbsSwiper />
      <PublicationMetadata />
    </Stack>
  );
};

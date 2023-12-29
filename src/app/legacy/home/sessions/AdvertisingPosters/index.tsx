"use client";
import React from "react";

import { AspectRatio, Box, Image } from "@chakra-ui/react";

import { SimpleSwiper } from "@/components/organisms/SimpleSwiper";

const advertisingPosters = [
  {
    title: "Advertising Poster ",
    src: "https://c4.wallpaperflare.com/wallpaper/878/606/485/bmw-i8-garage-italia-crossfade-paint-job-wallpaper-preview.jpg",
  },
  {
    title: "Advertising Poster ",
    src: "https://w.wallhaven.cc/full/48/wallhaven-48y2v2.jpg",
  },
  {
    title: "Advertising Poster ",
    src: "https://www.motor.com.co/__export/1695230810539/sites/motor/img/2023/09/20/eqg.jpg_554688468.jpg",
  },
];

export const AdvertisingPostersSession = () => {
  return (
    <SimpleSwiper
      Component={({ props }) => (
        <AspectRatio ratio={[16 / 9]}>
          <Box cursor="pointer" rounded="md">
            <Image alt="" rounded="md" src={props.src} userSelect="none" w="full" />
          </Box>
        </AspectRatio>
      )}
      items={advertisingPosters}
      spaceBetween={4}
    />
  );
};

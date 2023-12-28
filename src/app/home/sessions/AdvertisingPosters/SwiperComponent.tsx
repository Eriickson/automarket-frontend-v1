"use client";
import React from "react";

import { AspectRatio, Box, Image } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AdvertisingPosters = [
  "https://c4.wallpaperflare.com/wallpaper/878/606/485/bmw-i8-garage-italia-crossfade-paint-job-wallpaper-preview.jpg",
  "https://w.wallhaven.cc/full/48/wallhaven-48y2v2.jpg",
  "https://www.motor.com.co/__export/1695230810539/sites/motor/img/2023/09/20/eqg.jpg_554688468.jpg",
];

export const SwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {AdvertisingPosters.map((AdvertisingPoster) => (
        <SwiperSlide key={AdvertisingPoster}>
          <AspectRatio ratio={[16 / 9]}>
            <Box cursor="pointer" rounded="md">
              <Image alt="" rounded="md" src={AdvertisingPoster} userSelect="none" w="full" />
            </Box>
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

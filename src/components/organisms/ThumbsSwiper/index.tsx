"use client";
import React, { useState } from "react";

import Image from "next/image";

import { AspectRatio, Box } from "@chakra-ui/react";

import { Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";

const items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const ThumbsSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | undefined>(undefined);
  return (
    <Box>
      <Box mb="1">
        <Swiper modules={[Thumbs]} spaceBetween={6} thumbs={{ swiper: thumbsSwiper }}>
          {items.map((item) => (
            <SwiperSlide key={item}>
              <AspectRatio overflow="hidden" ratio={16 / 9} rounded="sm">
                <Image
                  alt=""
                  height="600"
                  src="https://images.unsplash.com/photo-1602033960165-9cea185953eb?q=80&w=5472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="800"
                />
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box backgroundColor="secondary.500" p="1" rounded="sm">
        <Swiper watchSlidesProgress modules={[Thumbs]} slidesPerView={4} spaceBetween={4} onSwiper={setThumbsSwiper}>
          {items.map((item) => (
            <SwiperSlide key={item}>
              <AspectRatio overflow="hidden" rounded="sm">
                <Image
                  alt=""
                  height="600"
                  src="https://images.unsplash.com/photo-1602033960165-9cea185953eb?q=80&w=5472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="800"
                />
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

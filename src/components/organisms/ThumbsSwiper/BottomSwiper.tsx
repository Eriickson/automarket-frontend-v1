import React, { FC } from "react";

import { AspectRatio, Box, Image } from "@chakra-ui/react";

import { Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

interface BottomSwiperProps {
  items: string[];
  activeIndex: number;
  setThumbsSwiper?: (swiper: SwiperClass) => void;
}

export const BottomSwiper: FC<BottomSwiperProps> = ({ setThumbsSwiper, activeIndex, items }) => {
  return (
    <Box backgroundColor="secondary.500" rounded="sm">
      <Swiper
        watchSlidesProgress
        breakpoints={{ 1024: { slidesPerView: 5, spaceBetween: 4 }, 1440: { slidesPerView: 6, spaceBetween: 4 } }}
        modules={[Thumbs]}
        slidesPerView={4}
        spaceBetween={4}
        onSwiper={setThumbsSwiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item}>
            <Box cursor="pointer" pos="relative">
              <AspectRatio overflow="hidden" ratio={16 / 9} rounded="sm">
                <Image alt="" src={item} />
              </AspectRatio>
              <Box
                backgroundColor={index === activeIndex ? undefined : "#0000008D"}
                inset="0"
                pos="absolute"
                zIndex="1"
              ></Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

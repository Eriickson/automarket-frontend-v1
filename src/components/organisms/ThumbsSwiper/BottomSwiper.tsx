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
    <Box backgroundColor="secondary.500" p="1" rounded="sm">
      <Swiper watchSlidesProgress modules={[Thumbs]} slidesPerView={4} spaceBetween={4} onSwiper={setThumbsSwiper}>
        {items.map((item, index) => (
          <SwiperSlide key={item}>
            <Box pos="relative">
              <AspectRatio overflow="hidden" rounded="sm">
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

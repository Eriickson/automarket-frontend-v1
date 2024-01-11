import React, { FC } from "react";

import Image from "next/image";

import { AspectRatio } from "@chakra-ui/react";

import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useFullScreenGalleryContext from "./context";

interface MiniatureSwiperProps {}

export const MiniatureSwiper: FC<MiniatureSwiperProps> = ({}) => {
  const { images, setThumbsSwiper } = useFullScreenGalleryContext();
  return (
    <Swiper watchSlidesProgress modules={[Thumbs]} slidesPerView={9} spaceBetween={12} onSwiper={setThumbsSwiper}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <AspectRatio ratio={4 / 3} w="44">
            <Image alt="" height={240} src={image} width={320} />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

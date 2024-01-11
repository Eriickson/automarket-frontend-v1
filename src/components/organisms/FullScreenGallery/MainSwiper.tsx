import React from "react";

import Image from "next/image";

import { Center } from "@chakra-ui/react";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Swiper, SwiperSlide } from "swiper/react";

import useFullScreenGalleryContext from "./context";

export const MainSwiper = () => {
  const { images } = useFullScreenGalleryContext();

  return (
    <Swiper
      allowSlideNext={false}
      allowSlidePrev={false}
      allowTouchMove={false}
      slidesPerView={1}
      spaceBetween={25}
      style={{ height: "100%" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Center h="full" overflow="hidden">
            <TransformWrapper maxScale={1.6} minScale={1}>
              <TransformComponent>
                <Image alt="" height={1200} src={image} width={1200} />
              </TransformComponent>
            </TransformWrapper>
          </Center>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

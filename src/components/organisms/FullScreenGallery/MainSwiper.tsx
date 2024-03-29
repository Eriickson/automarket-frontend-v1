import React from "react";

import Image from "next/image";

import { AspectRatio, Center } from "@chakra-ui/react";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useFullScreenGalleryContext from "./context";

export const MainSwiper = () => {
  const { images, thumbsSwiper } = useFullScreenGalleryContext();

  return (
    <Swiper
      allowTouchMove={false}
      modules={[Thumbs]}
      slidesPerView={1}
      spaceBetween={25}
      style={{ height: "100%" }}
      thumbs={{ swiper: thumbsSwiper }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Center h="full" overflow="hidden">
            <AspectRatio maxH={800} maxHeight="100%" maxWidth="100%" ratio={1} width={1200}>
              <TransformWrapper
                disablePadding
                limitToBounds
                smooth
                maxScale={1.8}
                minScale={1}
                panning={{ velocityDisabled: true }}
              >
                <TransformComponent>
                  <Image alt="" height={800} src={image} width={1200} />
                </TransformComponent>
              </TransformWrapper>
            </AspectRatio>
          </Center>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

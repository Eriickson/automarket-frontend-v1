import React, { FC, useState } from "react";

import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MiniatureSwiperProps {
  setThumbsSwiper: any;
  image: string[];
}

export const MiniatureSwiper: FC<MiniatureSwiperProps> = ({ image, setThumbsSwiper }) => {
  return <Swiper watchSlidesProgress modules={[Thumbs]} onSwiper={setThumbsSwiper}></Swiper>;
};

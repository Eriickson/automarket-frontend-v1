"use client";
import React, { FC } from "react";

import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GridOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/grid";

interface SimpleSwiperProps<T> {
  items: T[];
  Component: FC<{ props: T }>;
  slidesPerView?: number;
  spaceBetween?: number | number;
  grid?: GridOptions;
}

export const SimpleSwiper = <T,>({ Component, items, slidesPerView, spaceBetween, grid }: SimpleSwiperProps<T>) => {
  return (
    <Swiper
      grid={grid}
      modules={[Grid]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Component props={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

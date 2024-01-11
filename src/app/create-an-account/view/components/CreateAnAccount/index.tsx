"use client";
import React from "react";

import { useSwiper } from "swiper/react";

import { CreateAnAccountHolder } from "./CreateAnAccountHolder";

export const CreateAnAccountContainer = () => {
  const swiper = useSwiper();
  return (
    <CreateAnAccountHolder
      onSubmit={async (data) => {
        console.log(data);
        swiper.slideNext();
      }}
    />
  );
};

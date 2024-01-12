"use client";
import React from "react";

import delay from "delay";
import { useSwiper } from "swiper/react";

import { CreateAnAccountHolder } from "./CreateAnAccountHolder";

export const CreateAnAccountContainer = () => {
  const swiper = useSwiper();
  return (
    <CreateAnAccountHolder
      onSubmit={async (data) => {
        console.log(data);
        await delay(4000);
        swiper.slideNext();
      }}
    />
  );
};

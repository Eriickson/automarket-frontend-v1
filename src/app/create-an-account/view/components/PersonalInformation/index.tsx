"use client";
import React from "react";

import delay from "delay";
import { useSwiper } from "swiper/react";

import { PersonalInformationHolder } from "./PersonalInformationHolder";

export const PersonalInformationContainer = () => {
  const swiper = useSwiper();
  return (
    <PersonalInformationHolder
      onSubmit={async (data) => {
        console.log(data);
        await delay(4000);
        swiper.slideNext();
      }}
    />
  );
};

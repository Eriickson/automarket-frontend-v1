import React from "react";

import delay from "delay";
import { useSwiper } from "swiper/react";

import { SendPasswordRecoveryRequestForm } from "./form";

export const SendPasswordRecoveryRequest = () => {
  const swiperSlide = useSwiper();

  async function handleSubmit() {
    await delay(1000);
    swiperSlide.slideNext();
  }

  return <SendPasswordRecoveryRequestForm defaultValues={{ email: "erickson01d@gmail.com" }} onSubmit={handleSubmit} />;
};

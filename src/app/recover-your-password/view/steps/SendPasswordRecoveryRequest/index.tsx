import React from "react";

import { useSwiper } from "swiper/react";

import { SendPasswordRecoveryRequestForm } from "./form";

export const SendPasswordRecoveryRequest = () => {
  const swiperSlide = useSwiper();

  async function handleSubmit() {
    swiperSlide.slideNext();
  }

  return <SendPasswordRecoveryRequestForm onSubmit={handleSubmit} />;
};

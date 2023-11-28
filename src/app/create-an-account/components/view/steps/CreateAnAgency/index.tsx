import React from "react";

import { useSwiper } from "swiper/react";

import { CreateAnAgencyForm } from "./form";
import { RegisterAgencyFormType } from "./form/schema";

export const CreateAnAgencyStep = () => {
  const swiperSlide = useSwiper();

  async function handleSubmit(values: RegisterAgencyFormType) {
    console.log(values);
    swiperSlide.slideNext();
  }

  return <CreateAnAgencyForm onSubmit={handleSubmit} />;
};

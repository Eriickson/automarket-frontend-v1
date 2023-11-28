import React from "react";

import { useSwiper } from "swiper/react";

import { ValidateInvitationCodeForm } from "./form";
import { ValidateInvitationCodeFormType } from "./form/schema";

export const ValidateInvitationCodeStep = () => {
  const swiperSlide = useSwiper();

  async function handleSubmit(values: ValidateInvitationCodeFormType) {
    console.log(values);
    swiperSlide.slideNext();
  }

  return <ValidateInvitationCodeForm onSubmit={handleSubmit} />;
};

import React from "react";

import { useSwiper } from "swiper/react";

import { ValidateCodeForm } from "./form";
import { ValidateCodeFormType } from "./form/schema";

export const ValidateCode = () => {
  const swiperSlider = useSwiper();

  async function handleSubmit(data: ValidateCodeFormType) {
    console.log(data);
    swiperSlider.slideNext();
  }

  return (
    <div>
      <ValidateCodeForm onSubmit={handleSubmit} />
    </div>
  );
};

import React from "react";

import { MultiFormStepTitle } from "@/components/atoms";

import { useSwiper } from "swiper/react";

import { SendPasswordRecoveryRequestForm } from "./form";

export const SendPasswordRecoveryRequest = () => {
  const swiperSlide = useSwiper();

  async function handleSubmit() {
    swiperSlide.slideNext();
  }

  return (
    <div>
      <MultiFormStepTitle
        description="Ingresa tu correo electrónico para enviarte un código y así puedas recuperar tu contraseña."
        title="Has olvidado tu contraseña?"
      />
      <SendPasswordRecoveryRequestForm onSubmit={handleSubmit} />
    </div>
  );
};

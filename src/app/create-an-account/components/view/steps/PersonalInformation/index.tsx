import React from "react";

import { useSwiper } from "swiper/react";

import { PersonalInformationForm } from "./form";
import { RegisterPersonalInformationFormType } from "./form/schema";

export const RegisterPersonalInformationStep = () => {
  const swiperSlide = useSwiper();

  async function handleSubmit(values: RegisterPersonalInformationFormType) {
    console.log(values);
    swiperSlide.slideNext();
  }

  return (
    <PersonalInformationForm
      defaultValues={{
        fullname: "Jorge Luis",
        birthday: "03/11/1999",
        email: "user06@gmail.com",
        username: "user06",
        password: "12345678Ee.",
        confirmPassword: "12345678Ee.",
      }}
      onSubmit={handleSubmit}
    />
  );
};

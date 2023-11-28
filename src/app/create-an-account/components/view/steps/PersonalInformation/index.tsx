import React from "react";

import { Box } from "@chakra-ui/react";

import { MultiFormStepTitle } from "@/components/atoms";

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
    <Box>
      <MultiFormStepTitle description="Necesitamos algunos datos para crear tu cuenta." title="Información personal" />

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
    </Box>
  );
};

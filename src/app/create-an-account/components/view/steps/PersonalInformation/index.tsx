import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { RegisterPersonalInformationFormType } from "./form/schema";

import { PersonalInformationForm } from "./form";

export const RegisterPersonalInformationStep = () => {
  const swiperSlide = useSwiper();

  async function handleSubmit(values: RegisterPersonalInformationFormType) {
    console.log(values);
  }

  return (
    <Box>
      <Box mb="8" textAlign="center">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Información personal
        </Heading>
        <Text>Necesitamos algunos datos para crear tu cuenta.</Text>
      </Box>

      <PersonalInformationForm
        defaultValues={{
          fullname: "Jorge Luis",
          birthday: "03/11/1999",
          email: "user03@gmail.com",
          username: "user03",
          password: "12345678Ee.",
          confirmPassword: "12345678Ee.",
        }}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

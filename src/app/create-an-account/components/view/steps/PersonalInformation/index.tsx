import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { resolver, RegisterPersonalInformationFormType } from "./form/schema";
import { useFormProvider } from "@/hooks/useFormProvider";
import { authApi } from "@/store/features/api/auth";
import { PersonalInformationForm } from "./form";

export const RegisterPersonalInformationStep = () => {
  const swiperSlide = useSwiper();
  const { methods } = useFormProvider<RegisterPersonalInformationFormType>({
    resolver,
    defaultValues: {
      fullname: "Jorge Luis",
      birthday: "03/11/1999",
      email: "user03@gmail.com",
      username: "user03",
      password: "12345678Ee.",
      confirmPassword: "12345678Ee.",
    },
  });
  const [checkFieldAvailability] = authApi.useLazyCheckFieldAvailabilityQuery();

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

      <PersonalInformationForm onSubmit={handleSubmit} />
    </Box>
  );
};

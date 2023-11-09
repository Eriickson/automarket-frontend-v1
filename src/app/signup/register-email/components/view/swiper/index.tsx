"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { RegisterPersonalInformationStep } from "../steps/RegisterPersonalInformation";
import { ValidateInvitationCodeStep } from "../steps/ValidateInvitationCode";
import { CreateAnAgencyStep } from "../steps/CreateAnAgency";
import { Box, Stack } from "@chakra-ui/react";

import "swiper/css";
import { StepIndicatorLine } from "../../StepIndicatorLine";

export const SwiperSteps = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const steps = [
    { title: "Información personal", component: <RegisterPersonalInformationStep /> },
    { title: "Validar código de invitación", component: <ValidateInvitationCodeStep /> },
    { title: "Crear una agencia", component: <CreateAnAgencyStep /> },
  ];

  return (
    <Stack spacing="12">
      <Box>
        <Swiper
          allowTouchMove={false}
          spaceBetween={50}
          onSlideChange={(swiper) => setCurrentSlider(swiper.activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
          autoHeight={true}
          navigation
          tabIndex={2}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <Box px="0.5">{step.component}</Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <StepIndicatorLine currentStep={currentSlider} totalSteps={steps.length} />
    </Stack>
  );
};

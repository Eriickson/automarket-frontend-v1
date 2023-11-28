"use client";
import React, { useState } from "react";

import { Box, Stack } from "@chakra-ui/react";

import { StepIndicatorLine } from "@/components/atoms";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { EnterYourNewPassword, PasswordResetSuccessfully, SendPasswordRecoveryRequest, ValidateCode } from "./steps";
export const SwiperSteps = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const steps = [
    { title: "Información personal", component: <SendPasswordRecoveryRequest /> },
    { title: "Información personal", component: <ValidateCode /> },
    { title: "Información personal", component: <EnterYourNewPassword /> },
    { title: "Información personal", component: <PasswordResetSuccessfully /> },
  ];

  return (
    <Stack spacing="12">
      <Box>
        <Swiper
          navigation
          allowTouchMove={false}
          spaceBetween={50}
          tabIndex={currentSlider}
          onSlideChange={(swiper) => setCurrentSlider(swiper.activeIndex)}
        >
          {steps.map((step, index) => (
            <SwiperSlide id={`slider-${index + index}`} key={index}>
              <Box px="0.5">{step.component}</Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <StepIndicatorLine currentStep={currentSlider} totalSteps={steps.length} />
    </Stack>
  );
};

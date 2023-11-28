import React, { FC, useState } from "react";

import { Box, Stack } from "@chakra-ui/react";

import { StepIndicatorLine } from "@/components/atoms";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { MultiFormStepTitle } from "./MultiFormStepTitle";

export interface MultiStepFormItem {
  title: string;
  description: string;
  component: React.ReactNode;
}

interface MultiStepFormProps {
  steps: MultiStepFormItem[];
}

export const MultiStepForm: FC<MultiStepFormProps> = ({ steps }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  return (
    <Box>
      <Stack spacing="12">
        <Box>
          <Swiper
            navigation
            spaceBetween={50}
            tabIndex={currentSlider}
            onSlideChange={(swiper) => setCurrentSlider(swiper.activeIndex)}
          >
            {steps.map((step, index) => (
              <SwiperSlide id={`slider-${index + index}`} key={index}>
                <MultiFormStepTitle description={step.description} title={step.title} />
                <Box px="0.5">{step.component}</Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <StepIndicatorLine currentStep={currentSlider} totalSteps={steps.length} />
      </Stack>
    </Box>
  );
};

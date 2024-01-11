"use client";
import React from "react";

import { Stack, Text } from "@chakra-ui/react";

import { ContinueWithSocialMediaButtons } from "@/app/signin/view/components";
import { OrDivider } from "@/components/atoms/OrDivider";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { CreateAnAccountContainer } from "./components/CreateAnAccount";

export const SwiperForm = () => {
  return (
    <Swiper
      autoHeight
      slidesPerView={1}
      spaceBetween={25}
      style={{ height: "100%", width: "100%" }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{ height: "100%", width: "100%" }}>
        <Stack h="full" justifyContent="center" px="1" spacing="6" w="full">
          <TitleLoginComponent
            description="Crea tu cuenta para poder acceder a todos los beneficios que tenemos para ti."
            title="Crea tu cuenta"
          />
          <CreateAnAccountContainer />
          <OrDivider />
          <ContinueWithSocialMediaButtons />
        </Stack>
      </SwiperSlide>
      <SwiperSlide style={{ height: "100%" }}>
        <Stack h="full" justifyContent="center" px="1" spacing="6">
          <Text>111111111</Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide style={{ height: "100%" }}>
        <Stack h="full" justifyContent="center" px="1" spacing="6">
          <Text>22222222</Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide style={{ height: "100%" }}>
        <Stack h="full" justifyContent="center" px="1" spacing="6">
          <Text>33333333</Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide style={{ height: "100%" }}>
        <Stack h="full" justifyContent="center" px="1" spacing="6">
          <Text>44444444</Text>
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
};

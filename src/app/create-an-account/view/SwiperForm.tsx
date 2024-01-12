"use client";
import React from "react";

import { Stack } from "@chakra-ui/react";

import { ContinueWithSocialMediaButtons } from "@/app/signin/view/components";
import { OrDivider } from "@/components/atoms/OrDivider";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { CreateAnAgencyContainer } from "./components/CreateAnAgency";
import { PersonalInformationContainer } from "./components/PersonalInformation";
import { ValidateInvitationContainer } from "./components/ValidateInvitationCode";

export const SwiperForm = () => {
  return (
    <Swiper
      autoHeight
      initialSlide={2}
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
          <PersonalInformationContainer />
          <OrDivider />
          <ContinueWithSocialMediaButtons />
        </Stack>
      </SwiperSlide>
      <SwiperSlide style={{ height: "100%" }}>
        <Stack h="full" justifyContent="center" px="1" spacing="6">
          <TitleLoginComponent
            description="Te hemos enviado un código a tu correo electrónico, ingrésalo acá para continuar."
            title="Validar código de invitación"
          />
          <ValidateInvitationContainer />
        </Stack>
      </SwiperSlide>
      <SwiperSlide style={{ height: "100%" }}>
        <Stack h="full" justifyContent="center" px="1" spacing="6">
          <TitleLoginComponent
            description="Esta información será la que aparecerán en tu perfil y será visible para los usuarios."
            title="Datos de tu agencia"
          />
          <CreateAnAgencyContainer />
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
};

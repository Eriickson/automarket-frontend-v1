"use client";
import React from "react";

import { Box } from "@chakra-ui/react";

import { BasicPublicationCard } from "../../components/BasicPublicationCard";
import { HeaderSession } from "../../components/header-session";
import { SwiperComponent } from "../AdvertisingPosters/SwiperComponent";

const vehicles = [
  "https://images.unsplash.com/photo-1610768207795-72169abdf0d4?q=80&w=6016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605756580041-21312e9fb2bc?q=80&w=4927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583695216122-35bb62c8b9cc?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1634737581963-5a22ba471961?q=80&w=3665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=3671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555941543-638fbc21f131?q=80&w=4800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const FeaturedPublicationsSession = () => {
  return (
    <Box>
      <Box mb="2">
        <HeaderSession
          description="Encuentra el vehículo que necesitas, en el lugar que lo necesitas. ¡No esperes más!"
          title="Vehículos Destacados"
        />
      </Box>
      <SwiperComponent
        Component={({ props }) => <BasicPublicationCard src={props} />}
        items={vehicles}
        slidesPerView={3}
        spaceBetween={4}
      />
    </Box>
  );
};

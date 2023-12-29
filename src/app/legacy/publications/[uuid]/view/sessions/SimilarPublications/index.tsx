"use client";
import React from "react";

import { Box } from "@chakra-ui/react";

import { BasicPublicationCard } from "@/app/legacy/home/components/BasicPublicationCard";
import { HeaderSession } from "@/app/legacy/home/components/header-session";
import { SimpleSwiper } from "@/components/organisms/SimpleSwiper";

const vehicles = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=3690&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=5943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const SimilarPublications = () => {
  return (
    <Box>
      <Box mb="0.5">
        <HeaderSession
          description="Aquí tenemos otras opciones que podrían interesarte"
          title="Publicaciones Similares"
        />
      </Box>
      <SimpleSwiper
        Component={({ props }) => <BasicPublicationCard src={props} />}
        items={vehicles}
        slidesPerView={3}
        spaceBetween={4}
      />
    </Box>
  );
};

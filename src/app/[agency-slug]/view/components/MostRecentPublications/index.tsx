"use client";
import React from "react";

import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";

import { HeaderSession } from "@/app/legacy/home/components/header-session";
import { Button } from "@/components/atoms";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

export const MostRecentPublications = () => {
  return (
    <ScreenAreaDelimiter maxWidth="1440">
      <HeaderSession title="Publicaciones recientes" />
      <SimpleGrid columns={12} gap="1" mt="1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <GridItem colSpan={4} key={item}>
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=5550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </GridItem>
        ))}
      </SimpleGrid>
      <Button colorScheme="primary" mt="2" w="full">
        Mostrar Inventario Completo
      </Button>
    </ScreenAreaDelimiter>
  );
};

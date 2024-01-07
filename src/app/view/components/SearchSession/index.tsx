"use client";
import React from "react";

import { Button } from "@/components/atoms";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { ModalWithButton } from "@/components/organisms/ModalWithButton";

import { BodyModalComponent } from "./BodyModalComponent";
import { SearchModalButton } from "./SearchModalButton";

export const SearchSession = () => {
  return (
    <ScreenAreaDelimiter>
      <ModalWithButton
        BodyComponent={BodyModalComponent}
        buttonComponent={<SearchModalButton />}
        FooterComponent={() => (
          <Button colorScheme="primary" w="full">
            Realizar búsqueda
          </Button>
        )}
        title="Buscar publicaciones"
      />
    </ScreenAreaDelimiter>
  );
};

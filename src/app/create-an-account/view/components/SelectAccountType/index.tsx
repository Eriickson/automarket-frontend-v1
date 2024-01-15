import React from "react";

import { Stack } from "@chakra-ui/react";

import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { SelectAccountTypeFormContainer } from "./form";

export const SelectAccountType = () => {
  return (
    <Stack>
      <TitleLoginComponent
        description="Para comenzar, elige la opción que más se adapte a las necesidades de tuyas y de tu negocio."
        title="Selecciona el tipo de cuenta"
      />
      <SelectAccountTypeFormContainer />
    </Stack>
  );
};

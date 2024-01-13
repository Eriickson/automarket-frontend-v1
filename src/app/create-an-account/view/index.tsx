import React from "react";

import { Stack } from "@chakra-ui/react";

import { ContinueWithSocialMediaButtons } from "@/app/signin/view/components";
import { OrDivider } from "@/components/atoms/OrDivider";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { TitleLoginComponent } from "@/components/atoms/TitleLoginComponent";

import { PersonalInformationContainer } from "./components/PersonalInformation";
import { SelectAccountType } from "./components/SelectAccountType";

export const CreateAndAccountView = () => {
  return (
    <ScreenAreaDelimiter maxWidth="480">
      {/* <Stack spacing="6">
        <TitleLoginComponent
          description="Necesitamos algunos de tus datos para iniciar con el proceso de creación de tu cuenta."
          title="Crea tu cuenta"
        />
        <PersonalInformationContainer />
        <OrDivider />
        <ContinueWithSocialMediaButtons />
      </Stack> */}
      <SelectAccountType />
    </ScreenAreaDelimiter>
  );
};

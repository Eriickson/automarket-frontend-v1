import React from "react";

import { Stack } from "@chakra-ui/react";

import { OrDivider } from "@/components/atoms/OrDivider";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { ContinueWithSocialMediaButtons, SigninFormContainer, TitleComponent } from "./components";

export const SigninView = () => {
  return (
    <ScreenAreaDelimiter maxWidth="480">
      <Stack spacing="6">
        <TitleComponent />
        <SigninFormContainer />
        <OrDivider />
        <ContinueWithSocialMediaButtons />
      </Stack>
    </ScreenAreaDelimiter>
  );
};

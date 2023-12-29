import React from "react";

import { Stack } from "@chakra-ui/react";

import { OrDivider } from "@/components/atoms/OrDivider";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { ContinueWithSocialMediaButtons } from "./components/ContinueWithSocialMediaButtons";
import { SigninFormContainer } from "./components/SigninForm/SigninFormContainer";
import { TitleComponent } from "./components/TitleComponent";

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

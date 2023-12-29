import React from "react";

import { Stack } from "@chakra-ui/react";

import { FacebookAuthButton, GoogleAuthButton } from "@/components/organisms";

export const ContinueWithSocialMediaButtons = () => {
  return (
    <Stack>
      <GoogleAuthButton />
      <FacebookAuthButton />
    </Stack>
  );
};

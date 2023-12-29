"use client";

import React from "react";

import { Stack } from "@chakra-ui/react";

import { FacebookAuthButton } from "@/app/legacy/signin/view/FacebookAuthButton";
import { GoogleAuthButton } from "@/app/legacy/signin/view/GoogleAuthButton";
import { OrDivider } from "@/app/legacy/signin/view/OrDivider";

import { SigninFormHolder } from ".";

export const SigninFormContainer = () => {
  return (
    <Stack spacing="6">
      <SigninFormHolder onSubmit={async () => {}} />
      <OrDivider />
      <Stack>
        <GoogleAuthButton />
        <FacebookAuthButton />
      </Stack>
    </Stack>
  );
};

import React from "react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { SignupFormContainer } from "./components/signup-form";

export const SignupView = () => {
  return (
    <ScreenAreaDelimiter maxWidth="480">
      <SignupFormContainer />
    </ScreenAreaDelimiter>
  );
};

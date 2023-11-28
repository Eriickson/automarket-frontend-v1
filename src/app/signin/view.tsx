import React from "react";

import { Box } from "@chakra-ui/react";

import delay from "delay";

import { SigninForm } from "./SigninForm";
import { SigninValuesFormType } from "./SigninForm/schema";

export const SigninView = () => {
  async function handleSubmit(values: SigninValuesFormType) {
    await delay(2000);
  }

  return (
    <Box maxW="lg" w="full">
      <SigninForm
        defaultValues={{
          identifier: "erickson01d@gmail.com",
          password: "123456789e.",
          rememberMe: true,
        }}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

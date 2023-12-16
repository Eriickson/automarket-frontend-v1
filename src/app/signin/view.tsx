import React from "react";

import { Box } from "@chakra-ui/react";

import { authApi } from "@/store/features/api/auth";

import { useHandleErrors } from "@/hooks";

import { SigninForm } from "./SigninForm";
import { SigninValuesFormType } from "./SigninForm/schema";

export const SigninView = () => {
  const [signinMutation] = authApi.useSigninMutation();
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: SigninValuesFormType) {
    const response = await signinMutation({ data: values });

    if ("error" in response) return handleErrors(response);

    localStorage.setItem("access-token", response.data.data.tokens.accessToken);
    localStorage.setItem("refresh-token", response.data.data.tokens.refreshToken);
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

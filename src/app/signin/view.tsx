import React from "react";

import { Box } from "@chakra-ui/react";

import { authApi } from "@/store/features/api/auth";

import { useHandleErrors } from "@/hooks";

import axios from "axios";
import delay from "delay";

import { SigninForm } from "./SigninForm";
import { SigninValuesFormType } from "./SigninForm/schema";

export const SigninView = () => {
  const [signinMutation] = authApi.useSigninMutation();
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: SigninValuesFormType) {
    const response = await signinMutation({ data: values });

    if ("error" in response) return handleErrors(response);

    const { session } = response.data.data;

    const sessionResponse = await axios.post("/api/session", { session });
    if (sessionResponse.status === 200) {
      window.location.href = "/protected";
      await delay(5000);
    }
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

import React, { useState } from "react";

import { Box, Button } from "@chakra-ui/react";

import { authApi } from "@/store/features/api/auth";
import { decryptData, encryptData } from "@/utils/encrypt/encrypt";

import { useHandleErrors } from "@/hooks";

import axios from "axios";

import { SigninForm } from "./SigninForm";
import { SigninValuesFormType } from "./SigninForm/schema";

export const SigninView = () => {
  const [signinMutation] = authApi.useSigninMutation();
  const { handleErrors } = useHandleErrors();

  const [stringHashed, setStringHashed] = useState("");

  async function handleSubmit(values: SigninValuesFormType) {
    const response = await signinMutation({ data: values });

    if ("error" in response) return handleErrors(response);

    const { session } = response.data.data;

    const sessionResponse = await axios.post("/api/session", { session });

    console.log(sessionResponse);

    // localStorage.setItem("access-token", response.data.data.tokens.accessToken);
    // localStorage.setItem("refresh-token", response.data.data.tokens.refreshToken);
  }

  return (
    <Box maxW="lg" w="full">
      <SigninForm
        defaultValues={{
          identifier: "erickson01d@gmail.com",
          password: "12345678Ee.",
          rememberMe: true,
        }}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

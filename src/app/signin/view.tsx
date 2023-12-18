import React, { useState } from "react";

import { Box, Button } from "@chakra-ui/react";

import { authApi } from "@/store/features/api/auth";
import { decryptData, encryptData } from "@/utils/encrypt/encrypt";

import { useHandleErrors } from "@/hooks";

import { SigninForm } from "./SigninForm";
import { SigninValuesFormType } from "./SigninForm/schema";

export const SigninView = () => {
  const [signinMutation] = authApi.useSigninMutation();
  const { handleErrors } = useHandleErrors();

  const [stringHashed, setStringHashed] = useState("");

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
          password: "12345678Ee.",
          rememberMe: true,
        }}
        onSubmit={handleSubmit}
      />
      <Button
        onClick={async () => {
          const dataEncrypted = await encryptData({ payload: { ping: "pong" }, secretPass: "123456789" });
          console.log(dataEncrypted);
          setStringHashed(dataEncrypted);
        }}
      >
        Encrypt
      </Button>
      <Button
        onClick={async () => {
          const data = await decryptData({ encryptedData: stringHashed, secretPass: "123456789" });
          console.log(data);
        }}
      >
        Decrypt
      </Button>
    </Box>
  );
};

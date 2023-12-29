"use client";
import React from "react";

import { HStack, VStack } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { authApi } from "@/store/features/api/auth";
import { encryptData, getClientIp } from "@/utils";
import { getDeviceInfo } from "@/utils/getClientDeviceInformation";

import { useHandleErrors } from "@/hooks";

import axios from "axios";
import delay from "delay";

import { FacebookAuthButton } from "./FacebookAuthButton";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { OrDivider } from "./OrDivider";
import { SessionBottom } from "./SessionBottom";
import { SessionHeader } from "./SessionHeader";
import { SigninForm } from "./SigninForm";
import { SigninValuesFormType } from "./SigninForm/schema";

export const SigninView = () => {
  const [signinMutation] = authApi.useSigninMutation();
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: SigninValuesFormType) {
    await delay(5000);
    // const deviceInfo = getDeviceInfo();
    // const { clientIp } = await getClientIp();
    // const identityToken = encryptData({ clientIp, deviceInfo }, process.env.NEXT_PUBLIC_ENCRYPTION_IDENTITY_TOKEN_KEY!);
    // console.log(values);
    // console.log(identityToken);

    // const response = await signinMutation({ data: values, headers: { "x-identity-token": identityToken } });

    // if ("error" in response) return handleErrors(response);

    // const { session } = response.data.data!;

    // const sessionResponse = await axios.post("/api/session", { session });

    // if (sessionResponse.status === 200) {
    //   window.location.href = "/dashboard";

    // }
  }

  return (
    <ScreenAreaDelimiter maxWidth="1920">
      <VStack spacing="6">
        <SessionHeader />
        <HStack spacing={["2", null, null, null, "4"]} w="full">
          <GoogleAuthButton />
          <FacebookAuthButton />
        </HStack>
        <OrDivider />
        <SigninForm
          defaultValues={{
            identifier: "erickson01d@gmail.com",
            password: "123456789e.",
            rememberMe: true,
          }}
          onSubmit={handleSubmit}
        />
        <SessionBottom />
      </VStack>
    </ScreenAreaDelimiter>
  );
};

"use client";
import React from "react";

import Link from "next/link";

import { Box, Divider, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

import { LogoPresentation } from "@/components/atoms/LogoPresentation";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { authApi } from "@/store/features/api/auth";
import { encryptData, getClientIp } from "@/utils";
import { getDeviceInfo } from "@/utils/getClientDeviceInformation";

import { useHandleErrors } from "@/hooks";

import axios from "axios";
import delay from "delay";

import { FacebookAuthButton } from "./FacebookAuthButton";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { SessionHeader } from "./SessionHeader";
import { SigninForm } from "./SigninForm";
import { SigninValuesFormType } from "./SigninForm/schema";

export const SigninView = () => {
  const [signinMutation] = authApi.useSigninMutation();
  const { handleErrors } = useHandleErrors();

  async function handleSubmit(values: SigninValuesFormType) {
    const deviceInfo = getDeviceInfo();
    const { clientIp } = await getClientIp();
    const identityToken = encryptData({ clientIp, deviceInfo }, process.env.NEXT_PUBLIC_ENCRYPTION_IDENTITY_TOKEN_KEY!);
    console.log(values);
    console.log(identityToken);

    const response = await signinMutation({ data: values, headers: { "x-identity-token": identityToken } });

    if ("error" in response) return handleErrors(response);

    const { session } = response.data.data!;

    const sessionResponse = await axios.post("/api/session", { session });

    if (sessionResponse.status === 200) {
      window.location.href = "/dashboard";
      await delay(5000);
    }
  }

  return (
    <ScreenAreaDelimiter maxWidth="1920">
      <VStack spacing="6">
        <SessionHeader />
        <HStack spacing={["2", null, null, null, "4"]} w="full">
          <GoogleAuthButton />
          <FacebookAuthButton />
        </HStack>
        <HStack w="full">
          <Divider borderColor="gray.300" />
          <Text color="gray.500" fontSize="sm" fontWeight="medium" minW="max-content">
            O continua con correo electrónico
          </Text>
          <Divider borderColor="gray.300" />
        </HStack>
        <SigninForm
          defaultValues={{
            identifier: "erickson01d@gmail.com",
            password: "123456789e.",
            rememberMe: true,
          }}
          onSubmit={handleSubmit}
        />
        <Text fontSize={["sm", null, null, "md"]}>
          ¿No tienes una cuenta?{" "}
          <Link href="/create-an-account">
            <Text _hover={{ textDecoration: "underline" }} as="span" color="primary.500" fontWeight="semibold">
              Crea una cuenta
            </Text>
          </Link>
        </Text>
      </VStack>
    </ScreenAreaDelimiter>
  );
};

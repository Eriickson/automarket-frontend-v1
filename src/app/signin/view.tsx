import React from "react";

import Link from "next/link";

import { Box, Button, Divider, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

import { authApi } from "@/store/features/api/auth";
import { encryptData, getClientIp } from "@/utils";
import { getDeviceInfo } from "@/utils/getClientDeviceInformation";

import { useHandleErrors } from "@/hooks";

import axios from "axios";
import delay from "delay";

import { GoogleAuthButton } from "./GoogleAuthButton";
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
    <Box maxW="lg" w="full">
      <Link href="/">
        <Image alt="" mb="4" src="/assets/logo.svg" w="48" />
      </Link>
      <VStack spacing="6">
        <Box w="full">
          <Heading as="h2" fontWeight="semibold" mb="2" size={["lg", "xl"]}>
            Ingrese a su cuenta
          </Heading>
          <Text fontSize={["sm", null, null, "md"]}>
            Bienvenido de nuevo! Selecciona el método de inicio de sesión.
          </Text>
        </Box>
        <HStack spacing="4" w="full">
          <GoogleAuthButton />
          <Button flex="1" py="6" rounded="sm" shadow="sm" variant="outline">
            <HStack>
              <Image alt="" src="/assets/login-icons/facebook.png" w="6" />
              <Text>Facebook</Text>
            </HStack>
          </Button>
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
        <Text>
          ¿No tienes una cuenta?{" "}
          <Link href="/create-an-account">
            <Text _hover={{ textDecoration: "underline" }} as="span" color="primary.500" fontWeight="semibold">
              Crea una cuenta
            </Text>
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

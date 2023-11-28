import React from "react";

import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";

import { CodeVerificationFieldController } from "@/components/atoms/CodeVerificationField/controller";

import { FormProvider, useForm } from "react-hook-form";
import { useSwiper } from "swiper/react";

import { resolver, ValidateInvitationCodeFormType } from "./schema";

const simulateCallApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
};

export const ValidateInvitationCodeStep = () => {
  const swiperSlide = useSwiper();
  const methods = useForm<ValidateInvitationCodeFormType>({ resolver: resolver });

  async function handleSubmit(values: ValidateInvitationCodeFormType) {
    console.log(swiperSlide.previousIndex);
    const response = await simulateCallApi();

    console.log(values);

    if (response) swiperSlide.slideNext();
  }

  return (
    <Box>
      <Box mb="8" textAlign="center">
        <Heading as="h2" fontWeight="semibold" size="xl">
          Validar código de invitación
        </Heading>
        <Text>Ingresa el código de invitación que te enviamos a tu correo electrónico.</Text>
      </Box>
      <FormProvider {...methods}>
        <VStack as="form" spacing="4" onSubmit={methods.handleSubmit(handleSubmit)}>
          <CodeVerificationFieldController label="" name="invitationCode" />
          <Button
            color="white"
            colorScheme="primary"
            isLoading={methods.formState.isSubmitting}
            loadingText="Validando código de invitación"
            py="6"
            type="submit"
            w="full"
          >
            Validar código de invitación
          </Button>
        </VStack>
      </FormProvider>
    </Box>
  );
};

import React from "react";

import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { FormProvider, useForm } from "react-hook-form";
import { CodeVerificationFieldController } from "@/components/atoms/CodeVerificationField/controller";
import { ValidateInvitationCodeFormType, resolver } from "./schema";

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
      <Box textAlign="center" mb="8">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Validar código de invitación
        </Heading>
        <Text>Ingresa el código de invitación que te enviamos a tu correo electrónico.</Text>
      </Box>
      <FormProvider {...methods}>
        <VStack as="form" onSubmit={methods.handleSubmit(handleSubmit)} spacing="4">
          <CodeVerificationFieldController label="" name="invitationCode" />
          <Button
            type="submit"
            loadingText="Validando código de invitación"
            py="6"
            w="full"
            color="white"
            colorScheme="primary"
            isLoading={methods.formState.isSubmitting}
          >
            Validar código de invitación
          </Button>
        </VStack>
      </FormProvider>
    </Box>
  );
};
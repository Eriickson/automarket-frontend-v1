import React from "react";

import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { CodeVerificationField } from "@/components/atoms/CodeVerificationField";

export const ValidateInvitationCodeStep = () => {
  const swiperSlide = useSwiper();
  return (
    <Box>
      <Box mb="8">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Validar código de invitación
        </Heading>
        <Text>Ingresa el código de invitación que te enviamos a tu correo electrónico.</Text>
      </Box>
      <Stack spacing="4">
        <CodeVerificationField />
        <Button
          onClick={() => swiperSlide.slideNext(500)}
          loadingText="Validando"
          py="6"
          w="full"
          color="white"
          bgColor="#165ef0"
        >
          Validar código de invitación
        </Button>
      </Stack>
    </Box>
  );
};

import React from "react";

import { Box, Stack } from "@chakra-ui/react";

import { SwiperSteps } from "./swiper";

export const RecoverMyPasswordView = () => {
  return (
    <Box maxW="xl">
      <Stack spacing="12">
        <SwiperSteps />
      </Stack>
    </Box>
  );
};

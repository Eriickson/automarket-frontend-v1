import React from "react";

import { Box, Center } from "@chakra-ui/react";
import { SwiperSteps } from "./swiper";

export const RegisterEmailView = () => {
  return (
    <Center flex="1">
      <Box w="full" maxW="xl">
        <SwiperSteps />
      </Box>
    </Center>
  );
};

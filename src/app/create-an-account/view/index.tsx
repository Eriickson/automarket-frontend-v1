import React from "react";

import { Box, Center, Stack } from "@chakra-ui/react";

import { StepIndicatorLine } from "@/components/atoms";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { SwiperForm } from "./SwiperForm";

export const CreateAndAccountView = () => {
  return (
    <Stack h="full">
      <Box></Box>
      <Center flex="1">
        <ScreenAreaDelimiter height="full" maxWidth="480">
          <SwiperForm />
        </ScreenAreaDelimiter>
      </Center>
      <Box pb="4">
        <ScreenAreaDelimiter maxWidth="480">
          <StepIndicatorLine currentStep={0} totalSteps={5} />
        </ScreenAreaDelimiter>
      </Box>
    </Stack>
  );
};

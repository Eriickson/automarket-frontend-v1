import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

import { LogoPresentation } from "@/components/atoms/LogoPresentation";

export const SessionHeader = () => {
  return (
    <Box>
      <LogoPresentation />
      <Box mt="2" w="full">
        <Heading as="h2" fontWeight="semibold" mb="1" size={["lg", null, null, "xl"]}>
          Ingrese a su cuenta
        </Heading>
        <Text fontSize={["sm", null, null, "md"]} lineHeight={["1.3"]}>
          Bienvenido de nuevo! Selecciona el método de inicio de sesión.
        </Text>
      </Box>
    </Box>
  );
};

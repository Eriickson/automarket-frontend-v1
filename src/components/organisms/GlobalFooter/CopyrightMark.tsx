import React from "react";

import { Center, Text } from "@chakra-ui/react";

export const CopyrightMark = () => {
  return (
    <Center>
      <Text fontSize={["sm", null, null, null, "md"]} maxW={["3xs"]} textAlign="center">
        © {new Date().getFullYear()} automarket.agency. Todos los derechos reservados.
      </Text>
    </Center>
  );
};

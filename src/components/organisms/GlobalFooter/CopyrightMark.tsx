import React from "react";

import { Text } from "@chakra-ui/react";

export const CopyrightMark = () => {
  return (
    <Text fontSize={["xs", null, null, null, "md"]} textAlign="center">
      © {new Date().getFullYear()}{" "}
      <Text as="span" fontWeight="semibold">
        automarket.agency
      </Text>
      . Todos los derechos reservados.
    </Text>
  );
};

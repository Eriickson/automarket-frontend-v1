import React from "react";

import { Text } from "@chakra-ui/react";

export const CopyrightMark = () => {
  return (
    <Text fontSize={["xs", null, "sm", null, "md"]}>
      © {new Date().getFullYear()}{" "}
      <Text as="span" fontWeight="semibold">
        automarket.agency.
      </Text>{" "}
      Todos los derechos reservados.
    </Text>
  );
};

import React from "react";

import Link from "next/link";

import { Text } from "@chakra-ui/react";
export const SessionBottom = () => {
  return (
    <Text fontSize={["sm", null, null, "md"]}>
      ¿No tienes una cuenta?{" "}
      <Link href="/create-an-account">
        <Text _hover={{ textDecoration: "underline" }} as="span" color="primary.500" fontWeight="semibold">
          Crea una cuenta
        </Text>
      </Link>
    </Text>
  );
};

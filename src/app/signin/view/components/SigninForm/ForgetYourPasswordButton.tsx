import React from "react";

import { Button } from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

export const ForgetYourPasswordButton = () => {
  return (
    <Link href="/recover-your-password">
      <Button
        _hover={{ textDecoration: "underline" }}
        color="primary.500"
        fontSize={["sm", null, null, "md"]}
        variant="link"
        w="max-content"
      >
        ¿Olvidaste tu contraseña?
      </Button>
    </Link>
  );
};

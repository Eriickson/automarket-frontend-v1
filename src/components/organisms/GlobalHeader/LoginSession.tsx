import React from "react";

import { Box, HStack, Link } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

export const LoginSession = () => {
  return (
    <Box>
      <HStack>
        <Link href="/create-an-account">
          <Button colorScheme="primary" rounded="sm">
            Crea tu cuenta
          </Button>
        </Link>
        <Link display={["none", null, null, null, "inline-flex"]} href="/signin">
          <Button bgColor="gray.200" colorScheme="secondary" rounded="sm" variant="ghost">
            Iniciar Sesión
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

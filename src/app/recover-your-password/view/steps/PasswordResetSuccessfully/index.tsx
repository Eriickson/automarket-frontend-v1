import React, { FC } from "react";

import { useRouter } from "next/navigation";

import { Center } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

interface PasswordResetSuccessfullyProps {}

export const PasswordResetSuccessfully: FC<PasswordResetSuccessfullyProps> = () => {
  const { push } = useRouter();
  return (
    <Center>
      <Button colorScheme="primary" onClick={() => push("/signin")}>
        Ir a iniciar sesión
      </Button>
    </Center>
  );
};

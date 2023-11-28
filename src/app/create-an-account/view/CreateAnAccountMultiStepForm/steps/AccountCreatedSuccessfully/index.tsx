import React, { FC } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/atoms";

export const AccountCreatedSuccessfully: FC = () => {
  const { push } = useRouter();

  return (
    <div>
      <Button colorScheme="primary" w="full" onClick={() => push("/")}>
        Volver al inicio
      </Button>
    </div>
  );
};

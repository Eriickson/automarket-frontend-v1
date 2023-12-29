"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "@chakra-ui/react";

import { FullScreenFormLayout } from "@/components/layouts/FullScreenForm";

const RecoverYourPasswordLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();

  return (
    <FullScreenFormLayout
      rightTopComponent={
        <Button color="#165ef0" fontWeight="semibold" variant="link" onClick={() => push("/signin")}>
          Volver al inicio de sesión
        </Button>
      }
      title="Recupera tu contraseña"
    >
      {children}
    </FullScreenFormLayout>
  );
};

export default RecoverYourPasswordLayout;

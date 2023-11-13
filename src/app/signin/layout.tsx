"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "@chakra-ui/react";

import { FullScreenFormLayout } from "@/components/layouts/FullScreenForm";

const SigninLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();

  return (
    <FullScreenFormLayout
      rightTopComponent={
        <Button color="#165ef0" fontWeight="semibold" variant="link" onClick={() => push("/create-an-account")}>
          Crea tu cuenta
        </Button>
      }
      title="Ingresa a tu cuenta"
    >
      {children}
    </FullScreenFormLayout>
  );
};

export default SigninLayout;

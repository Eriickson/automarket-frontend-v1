"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "@chakra-ui/react";

import { FullScreenFormLayout } from "@/components/layouts/FullScreen";

const CreateAnAccountLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();

  return (
    <FullScreenFormLayout
      rightTopComponent={
        <Button color="#165ef0" fontWeight="semibold" variant="link" onClick={() => push("/signin")}>
          Ingresa a tu cuenta
        </Button>
      }
      title="Crea tu cuenta"
    >
      {children}
    </FullScreenFormLayout>
  );
};

export default CreateAnAccountLayout;

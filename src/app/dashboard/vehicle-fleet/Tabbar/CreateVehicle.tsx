"use client";
import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "@chakra-ui/react";

export const CreateVehicleButton = () => {
  const { push } = useRouter();

  return (
    <Button colorScheme="primary" rounded="sm" onClick={() => push("/dashboard/vehicle-fleet/register")}>
      Registrar Vehículo
    </Button>
  );
};

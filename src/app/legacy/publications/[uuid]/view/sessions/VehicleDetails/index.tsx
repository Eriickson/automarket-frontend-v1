import React from "react";

import { Card, CardBody, Stack } from "@chakra-ui/react";

import { GallerySectionHeader } from "@/components/atoms/GallerySectionHeader";

import { VehicleDetailItem } from "./Item";

export const VehicleDetails = () => {
  return (
    <Stack spacing="0.5">
      <GallerySectionHeader hiddenSeeMore title="Detalles Generales" />
      <Card rounded="sm">
        <CardBody p={["2", null, null, "4"]}>
          <Stack>
            <VehicleDetailItem label="Marca" value="Toyota" />
            <VehicleDetailItem label="Modelo" value="Corolla" />
            <VehicleDetailItem label="Trim Level" value="ES" />
            <VehicleDetailItem label="Tipo de Chasis" value="Sedan" />
            <VehicleDetailItem label="Combustible" value="Gasolina" />
            <VehicleDetailItem label="Recorrido" value="85,000 Km" />
            <VehicleDetailItem label="Tracción" value="En las Cuatro Ruedas (AWD)" />
            <VehicleDetailItem label="Transmisión" value="Continuamente Variable (CVT)" />
            <VehicleDetailItem label="Condiciones" value="Nuevo" />
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};

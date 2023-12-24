import React from "react";

import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";

import { VehicleDetailItem } from "./Item";

export const VehicleDetails = () => {
  return (
    <Box>
      <Box mb="2">
        <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb="1">
          Detalles Generales
        </Text>
      </Box>
      <Card>
        <CardBody>
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
    </Box>
  );
};

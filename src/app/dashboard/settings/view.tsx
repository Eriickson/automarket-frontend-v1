"use client";
import React from "react";

import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import { DashboardSessionTitle } from "../DashboardSessionTitle";
import { ProfileSession } from "../dealer/profile/ProfileSession";
export const AccountSettingsView = () => {
  return (
    <HStack alignItems="flex-start" h="full">
      <Box flex="1" minW="lg">
        <DashboardSessionTitle
          subtitle="Ajusta tu cuenta para una mejor experiencia en la gestión de tu perfil y preferencias."
          title="Configuraciones"
        />
        <Stack mt="16" spacing="12">
          <Box>
            <Text>
              Dispositivo: <b>Mackbook</b>
            </Text>
            {/* <Text>
              Sistema operativo: <b>MacOS</b>
            </Text> */}
            {/* <Text>
              Navegador: <b>Chrome</b>
            </Text> */}
            {/* <Text>
              Ubicación: <b>Santiago de los Caballeros, Rep. Dom.</b>
            </Text>
            <Text>
              Última Actividad: <b>Hace 25 min.</b>
            </Text>
            <Text>
              Versión: <b>92.0.4515.131</b>
            </Text> */}
          </Box>
        </Stack>
      </Box>
      <Box h="full" w="md" />
    </HStack>
  );
};

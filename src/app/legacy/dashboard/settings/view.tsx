"use client";
import React from "react";

import { Box, HStack, Stack } from "@chakra-ui/react";

import { DashboardSessionTitle } from "../DashboardSessionTitle";
import { ActiveSections } from "./sessions/ActiveSections";
import { PasswordAndSecuritySession } from "./sessions/PasswordAndSecurity";
export const AccountSettingsView = () => {
  return (
    <HStack alignItems="flex-start" h="full">
      <Box flex="1" minW="lg">
        <DashboardSessionTitle
          subtitle="Ajusta tu cuenta para una mejor experiencia en la gestión de tu perfil y preferencias."
          title="Configuraciones"
        />
        <Stack mt="16" spacing="12">
          <PasswordAndSecuritySession />
          <ActiveSections />
        </Stack>
      </Box>
      <Box h="full" w="md" />
    </HStack>
  );
};

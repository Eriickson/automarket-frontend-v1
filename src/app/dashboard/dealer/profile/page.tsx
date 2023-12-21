"use client";
import React from "react";

import { Box, Divider, HStack, Stack } from "@chakra-ui/react";

import { DashboardSessionTitle } from "../../DashboardSessionTitle";
import { Address } from "./Address";
import { ContactInformation } from "./ContactInformation";
import { DigitalPresence } from "./DigitalPresence";
import { GeneralInformation } from "./GeneralInformation";
import { ScheduleSession } from "./ScheduleSession";

const DealerProfilePage = () => {
  return (
    <HStack alignItems="flex-start" h="full">
      <Box flex="1" minW="lg">
        <DashboardSessionTitle
          subtitle="Visualiza y edita tu perfil de distribuidor para que tus clientes puedan conocerte mejor y puedan contactarte."
          title="Perfil de distribuidor"
        />
        <Stack mt="16" spacing="12">
          <GeneralInformation />
          <Divider />
          <ContactInformation />
          <Divider />
          <ScheduleSession />
          <Divider />
          <DigitalPresence />
          <Divider />
          <Address />
          <Box />
        </Stack>
      </Box>
      <Box h="full" w="md" />
    </HStack>
  );
};

export default DealerProfilePage;

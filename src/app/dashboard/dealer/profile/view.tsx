"use client";
import React from "react";

import { Box, Divider, HStack, Stack } from "@chakra-ui/react";

import { DashboardSessionTitle } from "../../DashboardSessionTitle";
import { AddressSession } from "./Address";
import { ContactInformationSession } from "./ContactInformation";
import { DigitalPresenceSession } from "./DigitalPresence";
import { GeneralInformationSession } from "./GeneralInformation";
import { PersonalInformationSession } from "./PersonalInformation";
import { ScheduleSession } from "./Schedule";

export const DealerProfilePageView = () => {
  return (
    <HStack alignItems="flex-start" h="full">
      <Box flex="1" minW="lg">
        <DashboardSessionTitle
          subtitle="Visualiza y edita tu perfil de distribuidor para que tus clientes puedan conocerte mejor y puedan contactarte."
          title="Perfil de distribuidor"
        />
        <Stack mt="16" spacing="12">
          <PersonalInformationSession />
          <Divider />
          <GeneralInformationSession />
          <Divider />
          <ContactInformationSession />
          <Divider />
          <ScheduleSession />
          <Divider />
          <DigitalPresenceSession />
          <Divider />
          <AddressSession />
          <Box />
        </Stack>
      </Box>
      <Box h="full" w="md" />
    </HStack>
  );
};

"use client";
import React from "react";

import { Box, Divider, HStack, Stack } from "@chakra-ui/react";

import { DashboardSessionTitle } from "../../DashboardSessionTitle";
import { AddressSession } from "./Address";
import { ContactInformationSession } from "./ContactInformation";
import { DigitalPresenceSession } from "./DigitalPresence";
import { GeneralInformationSession } from "./GeneralInformation";
import { ScheduleSession } from "./Schedule";

const DealerProfilePage = () => {
  return (
    <HStack alignItems="flex-start" h="full">
      <Box flex="1" minW="lg">
        <DashboardSessionTitle
          subtitle="Visualiza y edita tu perfil de distribuidor para que tus clientes puedan conocerte mejor y puedan contactarte."
          title="Perfil de distribuidor"
        />
        <Stack mt="16" spacing="12">
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

export default DealerProfilePage;

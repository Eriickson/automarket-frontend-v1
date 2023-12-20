"use client";
import React from "react";

import { Box, Divider, FormControl, FormLabel, HStack, Stack } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms";
import { SelectField } from "@/components/organisms";

import { DashboardSessionTitle } from "../../DashboardSessionTitle";
import { ContactInformation } from "./ContactInformation";
import { ProfileSession } from "./ProfileSession";
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
          <ProfileSession subtitle="Agrega información general sobre tu distribuidora." title="Información general">
            <FormControl>
              <FormLabel fontSize="sm" mb="1">
                Nombre
              </FormLabel>
              <SimpleTextField value="Erickson Auto Import" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm" mb="1">
                Eslogan
              </FormLabel>
              <SimpleTextField />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm" mb="1">
                Breve Descripción
              </FormLabel>
              <SimpleTextField />
            </FormControl>
          </ProfileSession>
          <Divider />

          <ContactInformation />
          <Divider />
          <ScheduleSession />
          <Divider />
          <ProfileSession subtitle="Agrega tu dirección para que tus clientes puedan visitarte." title="Dirección">
            <FormControl>
              <FormLabel fontSize="sm" mb="1">
                Provincia
              </FormLabel>
              <SelectField options={[]} />
            </FormControl>
            <HStack spacing="4">
              <FormControl>
                <FormLabel fontSize="sm" mb="1">
                  Municipio
                </FormLabel>
                <SelectField options={[]} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm" mb="1">
                  Sector
                </FormLabel>
                <SelectField options={[]} />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel fontSize="sm" mb="1">
                Calle
              </FormLabel>
              <SimpleTextField />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm" mb="1">
                Referencia
              </FormLabel>
              <SimpleTextField />
            </FormControl>
          </ProfileSession>
        </Stack>
      </Box>
      <Box h="full" w="xl"></Box>
    </HStack>
  );
};

export default DealerProfilePage;

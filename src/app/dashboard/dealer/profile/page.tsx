"use client";
import React from "react";

import { Box, Divider, FormControl, FormLabel, HStack, Stack, Text } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms";
import { SelectField } from "@/components/organisms";

import { DashboardSessionTitle } from "../../DashboardSessionTitle";
import { ProfileSession } from "./ProfileSession";

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
          <Box>
            <Text fontSize="lg" fontWeight="semibold">
              Información de contacto
            </Text>
            <Text fontSize="sm">Agrega tu información de contacto para que tus clientes puedan contactarte.</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="semibold">
              Horario
            </Text>
            <Text fontSize="sm">Indica el horario en el que tus clientes pueden visitar tus instalaciones.</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="semibold">
              Redes Sociales
            </Text>
            <Text fontSize="sm">Agrega tus redes sociales para que tus clientes puedan contactarte.</Text>
          </Box>
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

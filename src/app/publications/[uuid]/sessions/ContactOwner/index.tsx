"use client";
import React from "react";

import { Box, Card, CardBody, HStack, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { ContactInformationModal } from "./ContactInformationModal";
import { WhatsappButton } from "./WhatsappButton";

export const ContactOwnerSession = () => {
  return (
    <Box>
      <Box mb="2">
        <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb="1">
          Contactar al vendedor
        </Text>
      </Box>
      <Card>
        <CardBody>
          <Text color="gray.600" fontSize="sm" fontWeight="medium" mb="2">
            Elige la opción que más te convenga para contactar al vendedor.
          </Text>
          <HStack justifyContent="flex-end">
            <ContactInformationModal />

            <WhatsappButton />
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

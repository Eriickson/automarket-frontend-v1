import React from "react";

import { Avatar, Box, GridItem, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { SessionWapper } from "@/app/home/components/session-wapper";

import { Clock, MapPin } from "react-feather";

import { GallerySliderSession } from "./sessions/GallerySlider";
import { IndicatorsAndStatistics } from "./sessions/IndicatorsAndStatistics";
import { PriceAndOffers } from "./sessions/PriceAndOffers";
import { VehicleDetails } from "./sessions/VehicleDetails";

const PublicationDetails = () => {
  return (
    <Box py="8">
      <SessionWapper>
        <Box>
          <SimpleGrid columns={12} gap={6}>
            <GridItem colSpan={8}>
              <Stack spacing="4">
                <GallerySliderSession />
                <HStack alignItems="flex-start" spacing="6">
                  <HStack>
                    <Avatar />
                    <Box>
                      <Text fontWeight="medium" lineHeight="1.2">
                        Nombre del usuario
                      </Text>
                      <Text
                        color="gray.500"
                        fontSize="sm"
                        maxW="64"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        Los mejores vehículos a los mejores precios
                      </Text>
                    </Box>
                  </HStack>
                  <HStack color="gray.700">
                    <Clock size="1rem" /> <Text>Hace 2 horas</Text>
                  </HStack>
                  <HStack color="gray.700">
                    <MapPin size="1rem" /> <Text>Canabacoa, Santiago de los Caballeros</Text>
                  </HStack>
                </HStack>
                <Box>
                  <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb="1">
                    Descripción de la publicación
                  </Text>
                  <Text color="gray.500" lineHeight="1.2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, aliquam quia! Voluptatem sequi
                    vitae eveniet. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam voluptatum
                  </Text>
                </Box>
              </Stack>
            </GridItem>
            <GridItem colSpan={4}>
              <Stack spacing="8">
                <VehicleDetails />
                <PriceAndOffers />
                <IndicatorsAndStatistics />
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </SessionWapper>
    </Box>
  );
};

export default PublicationDetails;

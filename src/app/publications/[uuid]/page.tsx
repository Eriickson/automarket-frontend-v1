import React from "react";

import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { SessionWapper } from "@/app/home/components/session-wapper";

import { Clock, MapPin } from "react-feather";

const PublicationDetails = () => {
  return (
    <Box py="8">
      <SessionWapper>
        <Box>
          <SimpleGrid columns={12} gap={8}>
            <GridItem colSpan={8}>
              <Stack spacing="4">
                <AspectRatio ratio={18 / 9}>
                  <Image
                    alt=""
                    rounded="xl"
                    src="https://images.unsplash.com/photo-1666950213034-fdff64cecf6a?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </AspectRatio>
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
                <Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb="1">
                      Precio y Ofertas
                    </Text>
                  </Box>
                  <Box>
                    <Stack>
                      <HStack spacing="2.5">
                        <Text fontSize="2xl" fontWeight="bold" lineHeight="short" mb="1">
                          US$ 25k
                        </Text>
                        <Text
                          color="gray.400"
                          fontSize="lg"
                          fontWeight="medium"
                          lineHeight="short"
                          mb="1"
                          textDecoration="line-through"
                        >
                          RD$ 30k
                        </Text>
                      </HStack>
                      <Text color="green.500" fontWeight="medium">
                        ¡Aún le quedan 7 días a este precio!
                      </Text>
                    </Stack>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb="1">
                      Indicadores y Estadísticas
                    </Text>
                  </Box>
                  <Box>
                    <HStack spacing="3">
                      <Card flex="1">
                        <CardBody>
                          <VStack>
                            <CircularProgress color="primary.500" size="5rem" thickness="8px" value={95}>
                              <CircularProgressLabel>95</CircularProgressLabel>
                            </CircularProgress>
                            <Text>
                              Condicones <br /> de las llantas
                            </Text>
                          </VStack>
                        </CardBody>
                      </Card>
                      <Card flex="1">
                        <CardBody>
                          <VStack>
                            <CircularProgress color="primary.500" size="5rem" thickness="8px" value={85}>
                              <CircularProgressLabel>85</CircularProgressLabel>
                            </CircularProgress>
                            <Text>
                              Condicones <br /> de las llantas
                            </Text>
                          </VStack>
                        </CardBody>
                      </Card>
                      <Card flex="1">
                        <CardBody>
                          <VStack>
                            <CircularProgress color="primary.500" size="5rem" thickness="8px" value={65}>
                              <CircularProgressLabel>65</CircularProgressLabel>
                            </CircularProgress>
                            <Text>
                              Condicones <br /> de las llantas
                            </Text>
                          </VStack>
                        </CardBody>
                      </Card>
                    </HStack>
                  </Box>
                </Box>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </SessionWapper>
    </Box>
  );
};

export default PublicationDetails;

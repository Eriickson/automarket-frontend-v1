"use client";
import React from "react";

import { Box, Card, CardBody, Center, Flex, GridItem, HStack, SimpleGrid, Stack, Tag, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { Star } from "react-feather";

import { SessionWapper } from "../../home/components/session-wapper";

const plans = [
  {
    id: "1",
    name: "Standard",
    morePopular: false,
    price: 80,
    isCustom: false,
    description: "Inicia con funciones esenciales para un crecimiento sólido.",
  },
  {
    id: "2",
    name: "Advanced",
    morePopular: true,
    price: 130,
    isCustom: false,
    description: "Potencia tu experiencia con características avanzadas clave.",
  },
  {
    id: "3",
    name: "Premium",
    morePopular: false,
    price: 210,
    isCustom: false,
    description: "Herramientas profesionales para un rendimiento óptimo.",
  },
  {
    id: "3",
    name: "Pro",
    morePopular: false,
    price: 350,
    isCustom: false,
    description: "Acceso exclusivo a funciones premium para destacar.",
  },
  {
    id: "4",
    name: "Max",
    morePopular: false,
    price: 460,
    isCustom: false,
    description: "Rendimiento máximo con todas las funciones necesarias.",
  },
  {
    id: "5",
    name: "Max Enterprise",
    morePopular: false,
    price: 600,
    isCustom: true,
    description: "Soluciones empresariales personalizadas y soporte integral.",
  },
];

export const PlansAndPricingView = () => {
  return (
    <Stack py="6" spacing="12">
      <SessionWapper>
        <Stack>
          <Box mb="14" textAlign="center">
            <Text fontSize="3xl" fontWeight="semibold">
              Compara nuestros planes
            </Text>
            <Text>Elige el plan que más se ajuste a tus necesidades</Text>
          </Box>
          <SimpleGrid columns={12} gap={2}>
            {plans.map((plan) => (
              <GridItem colSpan={2} key={plan.id}>
                <Card border="1px" borderColor="gray.100">
                  <CardBody p="4">
                    <Flex alignItems="center" justifyContent="space-between" mb="4">
                      <Text color="primary.600" fontSize="lg" fontWeight="bold">
                        {plan.name}
                      </Text>
                      {plan.morePopular && (
                        <Tag
                          colorScheme="primary"
                          fontSize="sm"
                          fontWeight="medium"
                          pl="1.5"
                          rounded="sm"
                          variant="solid"
                        >
                          <HStack spacing="1.5">
                            <Star color="white" size="1rem" />
                            <Text>Más popular</Text>
                          </HStack>
                        </Tag>
                      )}
                    </Flex>
                    <Box mb="4">
                      <Text fontSize="sm" fontWeight="medium">
                        {plan.description}
                      </Text>
                    </Box>
                    {plan.isCustom ? (
                      <Flex alignItems="center" h="8" mb="4">
                        <Text fontWeight="semibold">Cotización personalizada</Text>
                      </Flex>
                    ) : (
                      <Flex alignItems="flex-end" mb="4">
                        <Text fontSize="2xl" fontWeight="semibold" mb="1.5">
                          $
                        </Text>
                        <Text fontSize="4xl" fontWeight="bold">
                          {plan.price}
                        </Text>
                        <Text fontWeight="medium" mb="1.5">
                          / Por mes
                        </Text>
                      </Flex>
                    )}
                    {plan.isCustom ? (
                      <Button colorScheme="primary" fontSize="sm" w="full">
                        Contáctanos
                      </Button>
                    ) : (
                      <Button colorScheme="primary" fontSize="sm" w="full">
                        Prueba de 30 días gratis
                      </Button>
                    )}
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </SimpleGrid>
        </Stack>
      </SessionWapper>
    </Stack>
  );
};

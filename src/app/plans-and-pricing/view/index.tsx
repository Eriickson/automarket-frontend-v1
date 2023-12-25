"use client";
import React from "react";

import { Box, Card, CardBody, Flex, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { SessionWapper } from "../../home/components/session-wapper";

const plans = [
  { id: "1", name: "Standard", morePopular: false, price: 100 },
  { id: "2", name: "Advanced", morePopular: true, price: 150 },
  { id: "3", name: "Premium", morePopular: false, price: 200 },
  { id: "4", name: "Max", morePopular: false, price: 250 },
  { id: "5", name: "Max Enterprise", morePopular: false, price: 300 },
];

export const PlansAndPricingView = () => {
  return (
    <Stack py="6" spacing="12">
      <SessionWapper>
        <Stack>
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="semibold">
              Compara nuestros planes
            </Text>
            <Text>Elige el plan que más se ajuste a tus necesidades</Text>
          </Box>
          <SimpleGrid columns={10} gap={4}>
            {plans.map((plan) => (
              <GridItem colSpan={2} key={plan.id}>
                <Card border="1px" borderColor="gray.100">
                  <CardBody>
                    <Text fontSize="xl" fontWeight="medium">
                      {plan.name}
                    </Text>
                    <Flex alignItems="flex-end" color="primary.600" mb="2.5">
                      <Text fontSize="lg" fontWeight="semibold" mb="1.5">
                        $
                      </Text>
                      <Text fontSize="3xl" fontWeight="bold">
                        {plan.price}
                      </Text>
                      <Text fontWeight="medium" mb="1.5">
                        / Por mes
                      </Text>
                    </Flex>
                    <Button colorScheme="primary" w="full">
                      Prueba de 30 días gratis
                    </Button>
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

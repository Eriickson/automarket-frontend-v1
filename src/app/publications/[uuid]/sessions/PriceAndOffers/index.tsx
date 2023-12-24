import React from "react";

import { Box, Card, CardBody, HStack, Stack, Text } from "@chakra-ui/react";

export const PriceAndOffers = () => {
  return (
    <Box>
      <Box>
        <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb="1">
          Precio y Ofertas
        </Text>
      </Box>
      <Card border="1px" borderColor="gray.50">
        <CardBody>
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
        </CardBody>
      </Card>
    </Box>
  );
};

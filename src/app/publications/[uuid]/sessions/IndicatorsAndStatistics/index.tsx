import React from "react";

import { Box, Card, CardBody, CircularProgress, CircularProgressLabel, HStack, Text, VStack } from "@chakra-ui/react";

export const IndicatorsAndStatistics = () => {
  return (
    <Box>
      <Box mb="2">
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
  );
};

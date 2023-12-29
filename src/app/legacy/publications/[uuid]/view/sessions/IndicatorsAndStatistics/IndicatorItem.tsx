import React, { FC } from "react";

import { Card, CardBody, CircularProgress, CircularProgressLabel, Text, VStack } from "@chakra-ui/react";

interface IndicatorItemProps {}

export const IndicatorItem: FC<IndicatorItemProps> = () => {
  return (
    <Card flex="1" maxW={["40"]}>
      <CardBody>
        <VStack>
          <CircularProgress color="primary.500" size="5rem" thickness="8px" value={95}>
            <CircularProgressLabel>95</CircularProgressLabel>
          </CircularProgress>
          <Text fontSize={["xs", null, null, null, "sm"]} fontWeight="medium" textAlign="center">
            Condicones de las llantas
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

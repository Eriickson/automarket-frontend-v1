import React from "react";

import { Center, GridItem, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { Zap } from "react-feather";
import { useController } from "react-hook-form";

const entitiesOptions = [
  {
    type: "particular",
    name: "Particulares",
  },
  {
    type: "dealer",
    name: "Concesionarios",
  },
];
export const AccountTypeField = () => {
  const { field } = useController({ name: "accountType" });

  return (
    <SimpleGrid columns={12} gap="4">
      {entitiesOptions.map((entity) => (
        <GridItem colSpan={6} cursor="pointer" key={entity.type} onClick={() => field.onChange(entity.type)}>
          <VStack
            backgroundColor={field.value === entity.type ? "#f5f7ff" : "transparent"}
            borderColor={field.value === entity.type ? "primary.500" : "gray.500"}
            borderWidth="1px"
            p="6"
            rounded="sm"
            transitionDuration="150ms"
          >
            <Center
              bgColor={field.value === entity.type ? "primary.500" : "gray.500"}
              h="8"
              transitionDuration="150ms"
              w="8"
            >
              <Zap color="white" />
            </Center>
            <Text
              color={field.value === entity.type ? "primary.500" : "gray.500"}
              fontWeight="semibold"
              transitionDuration="150ms"
              userSelect="none"
            >
              {entity.name}
            </Text>
          </VStack>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

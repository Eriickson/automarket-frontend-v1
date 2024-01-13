import React from "react";

import { Center, GridItem, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { Zap } from "react-feather";
import { useController } from "react-hook-form";

const entitiesOptions = [
  {
    type: "particular",
    name: "Particulares",
    description: "Propietarios que desean vender su vehículo o persona que necesita comprar uno nuevo.",
  },
  {
    type: "dealer",
    name: "Concesionarios",
    description: "Destinado a profesionales del sector que se dedican a la compra y venta de vehículos.",
  },
  // {
  //   type: "rent-a-car",
  //   name: "Servicios de renta",
  //   description: "Agencias que disponen de flotas de vehículos para alquilar.",
  // },
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
            px="6"
            py="8"
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
            <Text
              color={field.value === entity.type ? "primary.500" : "gray.500"}
              fontSize="sm"
              textAlign="center"
              transitionDuration="150ms"
              userSelect="none"
            >
              {entity.description}
            </Text>
          </VStack>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

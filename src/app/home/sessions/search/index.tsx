"use client";
import React from "react";

import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { SelectField } from "@/components/organisms";

export const SearchSession = () => {
  return (
    <Box bgColor="white" p="6" rounded="xl">
      <Box>
        <SimpleGrid columnGap="4" columns={12} rowGap="2">
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium">Marca</Text>
              <SelectField options={[]} />
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium">Modelo</Text>
              <SelectField options={[]} />
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium">Año Mínimo</Text>
              <SelectField options={[]} />
            </Box>
          </GridItem>{" "}
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium">Año Máximo</Text>
              <SelectField options={[]} />
            </Box>
          </GridItem>{" "}
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium">Precio Mínimo</Text>
              <SelectField options={[]} />
            </Box>
          </GridItem>{" "}
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium">Precio Máximo</Text>
              <SelectField options={[]} />
            </Box>
          </GridItem>{" "}
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium">Provincia</Text>
              <SelectField options={[]} />
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Text fontWeight="medium" visibility="hidden">
                Selecciona un año
              </Text>
              <Button colorScheme="primary" py="6" w="full">
                Realizar Búsqueda
              </Button>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

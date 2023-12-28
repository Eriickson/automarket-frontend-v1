"use client";
import React from "react";

import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { SelectField } from "@/components/organisms";
import { brandsApi } from "@/store/features/api/brands";

export const SearchSession = () => {
  const { data } = brandsApi.useGetBrandsQuery();
  const [getModelsByBrandIdQuery, { data: models }] = brandsApi.useLazyGetModelsByBrandIdQuery();

  return (
    <Box>
      <SimpleGrid columnGap="4" columns={12} rowGap="2">
        <GridItem colSpan={[6, null, null, 3]}>
          <Box>
            <Text fontWeight="medium">Marca</Text>
            <SelectField
              allowSearch
              options={data?.data?.brands || []}
              onChange={(valueSelected) => {
                const { value } = valueSelected.at(0)!;

                getModelsByBrandIdQuery({ queryParams: { brandId: value } });
              }}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={[6, null, null, 3]}>
          <Box>
            <Text fontWeight="medium">Modelo</Text>
            <SelectField
              options={models?.data?.models || []}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </Box>
        </GridItem>
        {/* <GridItem colSpan={3}>
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
        </GridItem> */}
        <GridItem colSpan={[12, null, null, 3]}>
          <Box>
            {/* <Text fontWeight="medium" visibility="hidden">
              Selecciona un año
            </Text> */}
            <Button colorScheme="secondary" w="full">
              Realizar Búsqueda
            </Button>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

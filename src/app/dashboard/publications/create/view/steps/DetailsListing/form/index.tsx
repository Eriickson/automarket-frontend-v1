import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, Center, Checkbox, HStack, ListItem, Radio, Text, UnorderedList } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

interface DetailsListingFormProps extends FormComponentProps<{}> {}

export const DetailsListingForm: FC<DetailsListingFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<DetailsListingFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Box>
        <Box mb="4">
          <Text fontSize="xl" fontWeight="semibold" lineHeight={1}>
            Comodidades y Confort
          </Text>
        </Box>
        <Box mb="4">
          <UnorderedList spacing="4">
            <ListItem>
              <Text fontWeight="medium">¿El vehículo tiene aire acondicionado?</Text>
              <HStack>
                <Radio colorScheme="secondary">
                  <Text>Sí</Text>
                </Radio>
                <Radio colorScheme="secondary">
                  <Text>No</Text>
                </Radio>
              </HStack>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Bolsas de aires</Text>
              <HStack>
                <Checkbox colorScheme="secondary">
                  <Text>Todas</Text>
                </Checkbox>
                <Checkbox colorScheme="secondary">
                  <Text>Conductor</Text>
                </Checkbox>
                <Checkbox colorScheme="secondary">
                  <Text>Pasajero</Text>
                </Checkbox>
                <Checkbox colorScheme="secondary">
                  <Text>Traseras</Text>
                </Checkbox>
                <Checkbox colorScheme="secondary">
                  <Text>Laterales</Text>
                </Checkbox>
              </HStack>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Mecanismo de los cristales</Text>
              <HStack>
                <Radio colorScheme="secondary">
                  <Text>Automáticos</Text>
                </Radio>
                <Radio colorScheme="secondary">
                  <Text>Manuales</Text>
                </Radio>
              </HStack>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Condiciones de las Llantas</Text>
              <HStack>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  const isActive = item === 5;

                  return (
                    <Center
                      bgColor={isActive ? "secondary.500" : "gray.50"}
                      border="1px"
                      borderColor="gray.400"
                      color={isActive ? "white" : "secondary.500"}
                      cursor="pointer"
                      h="8"
                      key={item}
                      rounded="sm"
                      w="8"
                    >
                      <Text fontSize="sm" fontWeight="medium">
                        {item}
                      </Text>
                    </Center>
                  );
                })}
              </HStack>
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Filas de Asientos</Text>
              <HStack>
                {[1, 2, 3].map((item) => {
                  const isActive = item === 3;

                  return (
                    <Center
                      bgColor={isActive ? "secondary.500" : "white"}
                      border="1px"
                      borderColor="gray.400"
                      color={isActive ? "white" : "secondary.500"}
                      cursor="pointer"
                      h="8"
                      key={item}
                      rounded="sm"
                      w="8"
                    >
                      <Text fontSize="sm" fontWeight="medium">
                        {item}
                      </Text>
                    </Center>
                  );
                })}
              </HStack>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </FormProvider>
  );
};

import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Box, Center, HStack, ListItem, Radio, Text, UnorderedList } from "@chakra-ui/react";

import { CheckboxGroupField } from "@/components/organisms/CheckboxGroupField";
import { RadioGroupField } from "@/components/organisms/RadioGroupField";

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
              <CheckboxGroupField
                options={[
                  { label: "Todas", value: "all", isIndeterminate: true },
                  { label: "Conductor", value: "driver" },
                  { label: "Pasajero", value: "passenger" },
                  { label: "Traseras", value: "rear" },
                  { label: "Laterales", value: "side" },
                ]}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Mecanismo de los cristales</Text>

              <RadioGroupField
                options={[
                  { label: "Automáticos", value: "automatic" },
                  { label: "Manuales", value: "manual" },
                ]}
              />
            </ListItem>
            <ListItem>
              <Text fontWeight="medium">Material de los Asientos</Text>
              <RadioGroupField
                options={[
                  { label: "Pana", value: "pana" },
                  { label: "Piel", value: "piel" },
                  { label: "Tela", value: "tela" },
                  { label: "Algodón", value: "algodon" },
                ]}
              />
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

import React, { FC } from "react";

import { Box, Center, Checkbox, HStack, ListItem, Radio, Text, UnorderedList } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

interface ControllersStepProps {
  formId: string;
  onPrevStep(): void;
  disablePrevStep?: boolean;
}

export const ControllersStep: FC<ControllersStepProps> = ({ disablePrevStep, formId, onPrevStep }) => {
  return (
    <Box>
      <Box mb="4">
        <UnorderedList spacing="4">
          <ListItem>
            <Text fontWeight="semibold">¿El vehículo tiene aire acondicionado?</Text>
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
            <Text fontWeight="semibold">Bolsas de aires</Text>
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
            <Text fontWeight="semibold">Mecanismo de los cristales</Text>
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
            <Text fontWeight="semibold">Condiciones de las Llantas</Text>
            <HStack>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                const isActive = item === 5;

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
                    <Text fontSize="sm" fontWeight="semibold">
                      {item}
                    </Text>
                  </Center>
                );
              })}
            </HStack>
          </ListItem>
        </UnorderedList>
      </Box>
      <HStack>
        <Button
          bgColor="gray.100"
          isDisabled={disablePrevStep}
          variant="ghost"
          onClick={disablePrevStep ? undefined : onPrevStep}
        >
          Paso anterior
        </Button>
        <Button colorScheme="primary" form={formId} type="submit">
          Siguiente paso
        </Button>
      </HStack>
    </Box>
  );
};

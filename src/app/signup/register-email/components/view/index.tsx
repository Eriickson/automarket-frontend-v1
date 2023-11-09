import React from "react";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StepIndicatorLine } from "../StepIndicatorLine";

export const RegisterEmailView = () => {
  return (
    <Box h="100vh">
      <SimpleGrid h="full" columns={12}>
        <GridItem h="full" colSpan={5}>
          <Stack spacing="6" h="full" p="12">
            <Box h="32">
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text fontWeight="semibold" fontSize="3xl">
                    Crea tu cuenta
                  </Text>
                </Box>
                <Text color="#165ef0" fontWeight="semibold" decoration="underline">
                  Ingresa a tu cuenta
                </Text>
              </Flex>
            </Box>
            <Center flex="1">
              <Box w="full" maxW="xl">
                <Box mb="8">
                  <Heading as="h2" size="xl" fontWeight="semibold">
                    Información personal
                  </Heading>
                  <Text>Necesitamos algunos datos para crear tu cuenta.</Text>
                </Box>

                <Stack mb="8" spacing="4">
                  <FormControl>
                    <FormLabel mb="1">Nombre completo </FormLabel>
                    <Input
                      _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                      py="6"
                      placeholder="Ingresa tu nombre completo"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mb="1">Fecha de nacimiento</FormLabel>
                    <Input
                      _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                      py="6"
                      placeholder="Día / Mes / Año"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mb="1">Correo electrónico</FormLabel>
                    <Input
                      _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                      py="6"
                      placeholder="Ingresa tu correo electrónico"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mb="1">Nombre de usuario</FormLabel>
                    <Input
                      _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                      py="6"
                      placeholder="Ingresa tu nombre de usuario"
                    />
                  </FormControl>
                  <HStack spacing="4">
                    <FormControl>
                      <FormLabel mb="1">Contraseña</FormLabel>
                      <Input
                        _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                        py="6"
                        placeholder="Ingresa tu contraseña"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mb="1">Confirmar Contraseña</FormLabel>
                      <Input
                        _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
                        py="6"
                        placeholder="Ingresa tu contraseña"
                      />
                    </FormControl>
                  </HStack>
                </Stack>
                <Button loadingText="Validando" mb="8" py="6" w="full" color="white" bgColor="#165ef0">
                  Enviar código de invitación
                </Button>
                <StepIndicatorLine currentStep={0} totalSteps={5} />
              </Box>
            </Center>
            <Box h="32" />
          </Stack>
        </GridItem>
        <GridItem bgColor="#f3f4f6" colSpan={7}>
          Hola
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

// 1. Sent invitation code (Nombre completo, fecha se nacimiento, correo electrónico, nombre de usuario, contraseña y confirmación de contraseña)
// 2. Validate invitation code
// 3. Creata an agency
// 4. Validate information
// 5. Success

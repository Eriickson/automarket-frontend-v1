import React from "react";

import { Box, Center, Flex, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SwiperSteps } from "./swiper";

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
                <SwiperSteps />
              </Box>
            </Center>
            <Box h="32" />
          </Stack>
        </GridItem>
        <GridItem bgColor="#f3f4f6" colSpan={7}></GridItem>
      </SimpleGrid>
    </Box>
  );
};

// 1. Sent invitation code (Nombre completo, fecha se nacimiento, correo electrónico, nombre de usuario, contraseña y confirmación de contraseña)
// 2. Validate invitation code
// 3. Creata an agency
// 4. Validate information
// 5. Success

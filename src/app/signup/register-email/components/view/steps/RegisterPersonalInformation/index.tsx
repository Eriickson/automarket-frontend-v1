import React from "react";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import { SimpleTextField } from "@/components/atoms/SimpleTextField";
import { TextDateField } from "@/components/atoms/TextDateField";

export const RegisterPersonalInformationStep = () => {
  const swiperSlide = useSwiper();

  return (
    <Box>
      <Box mb="8">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Información personal
        </Heading>
        <Text>Necesitamos algunos datos para crear tu cuenta.</Text>
      </Box>
      <Stack spacing="4">
        <FormControl>
          <SimpleTextField label="Nombre completo" placeholder="Ingresa tu nombre completo" />
        </FormControl>
        <TextDateField label="Fecha de nacimiento" placeholder="Día / Mes / Año" />
        <SimpleTextField label="Correo electrónico" placeholder="Ingresa tu correo electrónico" />
        <SimpleTextField label="Nombre de usuario" placeholder="Ingresa tu nombre de usuario" />
        <FormControl>
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
          <FormHelperText>
            La contraseña debe tener al menos 8 caracteres conformada por mayúsculas, minúsculas y números.
          </FormHelperText>
        </FormControl>
        <Button
          onClick={() => swiperSlide.slideNext(500)}
          loadingText="Validando"
          py="6"
          w="full"
          color="white"
          bgColor="#165ef0"
        >
          Enviar código de invitación
        </Button>
      </Stack>
    </Box>
  );
};

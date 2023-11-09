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

import React from "react";

import { Box, Button, FormControl, FormHelperText, HStack, Heading, Text } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";

import { resolver } from "./schema";
import { PasswordFieldController } from "@/components/atoms/PasswordField/controller";
import { TextDateFieldController } from "@/components/atoms/TextDateField/controller";
import { useFormProvider } from "@/hooks/useFormProvider";

export const RegisterPersonalInformationStep = () => {
  const swiperSlide = useSwiper();
  const { FormProvider } = useFormProvider({ resolver });

  async function handleSubmit(values: any) {
    console.log("submit");
    console.log(values);
    swiperSlide.slideNext();
  }
  return (
    <Box>
      <Box mb="8" textAlign="center">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Información personal
        </Heading>
        <Text>Necesitamos algunos datos para crear tu cuenta.</Text>
      </Box>

      <FormProvider onSubmit={handleSubmit}>
        <SimpleTextFieldController name="fullname" label="Nombre completo" placeholder="Ingresa tu nombre completo" />
        <TextDateFieldController name="birthday" label="Fecha de nacimiento" placeholder="Día / Mes / Año" />
        <SimpleTextFieldController
          name="email"
          label="Correo electrónico"
          placeholder="Ingresa tu correo electrónico"
          autoComplete="email"
        />
        <SimpleTextFieldController
          name="username"
          label="Nombre de usuario"
          placeholder="Ingresa tu nombre de usuario"
          autoComplete="username"
        />
        <FormControl>
          <HStack alignItems="flex-start" spacing="4">
            <PasswordFieldController
              autoComplete="new-password"
              name="password"
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
            />
            <PasswordFieldController
              autoComplete="new-password"
              name="confirmPassword"
              label="Confirmar Contraseña"
              placeholder="Ingresa tu contraseña"
            />
          </HStack>
          <FormHelperText>
            La contraseña debe tener al menos 8 caracteres conformada por mayúsculas, minúsculas y números.
          </FormHelperText>
        </FormControl>
        <Button type="submit" loadingText="Validando" py="6" w="full" color="white" colorScheme="primary">
          Enviar código de invitación
        </Button>
      </FormProvider>
    </Box>
  );
};

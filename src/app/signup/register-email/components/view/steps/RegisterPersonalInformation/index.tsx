import React, { FC } from "react";

import { useForm, FormProvider } from "react-hook-form";
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
import { TextDateField } from "@/components/atoms/TextDateField";
import { SimpleTextFieldController } from "@/components/atoms/SimpleTextField/controller";

import { resolver } from "./schema";
import { PasswordFieldController } from "@/components/atoms/PasswordField/controller";
import { TextDateFieldController } from "@/components/atoms/TextDateField/controller";

export const RegisterPersonalInformationStep = () => {
  const swiperSlide = useSwiper();
  const methods = useForm({ resolver });

  async function onSubmit(values: any) {
    console.log("submit");
    console.log(values);
    // swiperSlide.slideNext();
  }
  return (
    <Box>
      <Box mb="8">
        <Heading as="h2" size="xl" fontWeight="semibold">
          Información personal
        </Heading>
        <Text>Necesitamos algunos datos para crear tu cuenta.</Text>
      </Box>
      <FormProvider {...methods}>
        <Stack as="form" onSubmit={methods.handleSubmit(onSubmit)} spacing="4">
          <SimpleTextFieldController name="fullname" label="Nombre completo" placeholder="Ingresa tu nombre completo" />
          <TextDateFieldController name="birthday" label="Fecha de nacimiento" placeholder="Día / Mes / Año" />
          <SimpleTextFieldController
            name="email"
            label="Correo electrónico"
            placeholder="Ingresa tu correo electrónico"
          />
          <SimpleTextFieldController
            name="username"
            label="Nombre de usuario"
            placeholder="Ingresa tu nombre de usuario"
          />
          <FormControl>
            <HStack alignItems="flex-start" spacing="4">
              <PasswordFieldController name="password" label="Contraseña" placeholder="Ingresa tu contraseña" />
              <PasswordFieldController
                name="confirmPassword"
                label="Confirmar Contraseña"
                placeholder="Ingresa tu contraseña"
              />
            </HStack>
            <FormHelperText>
              La contraseña debe tener al menos 8 caracteres conformada por mayúsculas, minúsculas y números.
            </FormHelperText>
          </FormControl>
          <Button type="submit" loadingText="Validando" py="6" w="full" color="white" bgColor="#165ef0">
            Enviar código de invitación
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export interface FieldComponentProps {
  name: string;
  placeholder: string;
}

interface FormControlProps {
  placeholder: string;
  name: string;
  label: string;
  helperText?: string;
  FieldComponent: FC<FieldComponentProps>;
}

export const MyFormControl: FC<FormControlProps> = ({ FieldComponent, label, name, placeholder, helperText }) => {
  return (
    <FormControl isInvalid={false}>
      <FormLabel mb="1">{label}</FormLabel>
      <FieldComponent name={name} placeholder={placeholder} />
      <FormHelperText mt="1">{helperText}</FormHelperText>
    </FormControl>
  );
};

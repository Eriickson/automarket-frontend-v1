import React, { FC } from "react";

import { Button, FormControl, FormHelperText, HStack } from "@chakra-ui/react";
import { RegisterPersonalInformationFormType, resolver } from "./schema";
import { useFormProvider } from "@/hooks/useFormProvider";
import { PasswordFieldController, SimpleTextFieldController, TextDateFieldController } from "@/components/atoms";
import { authApi } from "@/store/features/api/auth";

interface PersonalInformationFormProps {
  onSubmit(data: any): void;
}

export const PersonalInformationForm: FC<PersonalInformationFormProps> = ({ onSubmit }) => {
  const [checkFieldAvailability] = authApi.useLazyCheckFieldAvailabilityQuery();

  const { FormProvider, methods } = useFormProvider<RegisterPersonalInformationFormType>({
    resolver,
    async validateBeforeSubmit({ email, username }, methods) {
      const [checkEmailAvailability, checkUsernameAvailability] = await Promise.all([
        checkFieldAvailability({ field: "email", value: email }),
        checkFieldAvailability({ field: "username", value: username }),
      ]);

      if (!checkEmailAvailability.data?.data.available || !checkUsernameAvailability.data?.data.available) {
        if (!checkEmailAvailability.data?.data.available) {
          methods.setError("email", {
            type: "manual",
            message: "No disponible",
          });
        }
        if (!checkUsernameAvailability.data?.data.available) {
          methods.setError("username", {
            type: "manual",
            message: "No disponible",
          });
        }
        return false;
      }

      return true;
    },
    defaultValues: {
      fullname: "Jorge Luis",
      birthday: "03/11/1999",
      email: "user03@gmail.com",
      username: "user03",
      password: "12345678Ee.",
      confirmPassword: "12345678Ee.",
    },
  });

  async function handleSubmit(data: any) {
    console.log(data);
  }

  return (
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
      <Button
        isDisabled={!methods.formState.isValid}
        type="submit"
        loadingText="Validando"
        py="6"
        w="full"
        color="white"
        colorScheme="primary"
      >
        Enviar código de invitación
      </Button>
    </FormProvider>
  );
};

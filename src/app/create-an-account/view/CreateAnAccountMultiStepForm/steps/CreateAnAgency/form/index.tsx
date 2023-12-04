import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { AspectRatio, Avatar, Box, Button, Center, FormControl, FormLabel, HStack, Image } from "@chakra-ui/react";

import { IconButton, SimpleTextFieldController, SubmitButton } from "@/components/atoms";
import { SelectFieldController } from "@/components/organisms";
import { provincesApi } from "@/store/features/api/provinces";

import { useFormProvider } from "@/hooks/useFormProvider";

import { Camera, Trash, Trash2 } from "react-feather";

import { AutoGeneratedAddressText } from "./AutoGeneratedAddressText";
import { RegisterAgencyFormType, resolver } from "./schema";

interface CreateAnAgencyFormProps extends FormComponentProps<RegisterAgencyFormType> {}
export const CreateAnAgencyForm: FC<CreateAnAgencyFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<RegisterAgencyFormType>({ resolver, defaultValues });

  const { data } = provincesApi.useGetProvincesQuery(null);

  return (
    <FormProvider onSubmit={onSubmit}>
      <Center>
        <Box pos="relative">
          <Center
            backgroundColor="white"
            border="1px"
            borderColor="gray.200"
            h="52"
            overflow="hidden"
            rounded="xl"
            w="64"
          >
            <Image
              alt=""
              maxH="full"
              maxW="full"
              src="https://dynamic.brandcrowd.com/asset/logo/4ea86e15-f89f-4488-9a96-fd88e5a84959/logo?logoTemplateVersion=1&v=638327905301500000"
            />
          </Center>
          <HStack bottom="2" pos="absolute" right="2" rounded="xl" zIndex="1">
            <IconButton aria-label="" rounded="md" size="sm">
              <Trash2 size="1.25rem" />
            </IconButton>{" "}
            <IconButton aria-label="" rounded="md" size="sm">
              <Camera size="1.25rem" />
            </IconButton>
          </HStack>
        </Box>
      </Center>
      <SimpleTextFieldController isRequired label="Nombre" name="name" placeholder="Ingresa el nombre de tu agencia" />
      <SimpleTextFieldController isRequired label="Eslogan" name="slogan" placeholder="Ingresa el eslogan" />
      {/* <SelectFieldController
        label="Provincia"
        name="province"
        options={(data as any)?.data?.map(({ name, id }) => ({ label: name, value: id })) || []}
      /> */}
      <HStack alignItems="flex-start" spacing="4">
        <SelectFieldController label="Municipio" name="municipality" options={[]} />
        <SelectFieldController label="Sector" name="sector" options={[]} />
      </HStack>
      <SimpleTextFieldController label="Calle" name="street" placeholder="Ingresa la referencia" />
      <SimpleTextFieldController label="Referencía" name="reference" placeholder="Ingresa la referencia" />
      <AutoGeneratedAddressText />
      <SubmitButton colorScheme="primary" mt="4">
        Validar datos de la agencia
      </SubmitButton>
    </FormProvider>
  );
};

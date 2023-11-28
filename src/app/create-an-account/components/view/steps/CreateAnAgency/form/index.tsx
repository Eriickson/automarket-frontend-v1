import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { AspectRatio, Box, FormControl, FormLabel, HStack, Image, Input } from "@chakra-ui/react";

import { SimpleTextFieldController, SubmitButton } from "@/components/atoms";
import { SelectField } from "@/components/organisms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { RegisterAgencyFormType, resolver } from "./schema";

const provinces = [
  { label: "La Altagracia", value: "La Altagracia" },
  { label: "Azua", value: "Azua" },
  { label: "Bahoruco", value: "Bahoruco" },
  { label: "Barahona", value: "Barahona" },
  { label: "Dajabón", value: "Dajabón" },
  { label: "Duarte", value: "Duarte" },
  { label: "Elías Piña", value: "Elías Piña" },
  { label: "El Seibo", value: "El Seibo" },
  { label: "Espaillat", value: "Espaillat" },
  { label: "Hato Mayor", value: "Hato Mayor" },
];

interface CreateAnAgencyFormProps extends FormComponentProps<RegisterAgencyFormType> {}
export const CreateAnAgencyForm: FC<CreateAnAgencyFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<RegisterAgencyFormType>({ resolver, defaultValues });

  return (
    <FormProvider onSubmit={onSubmit}>
      <FormControl>
        <FormLabel mb="1">Logo</FormLabel>
        <HStack>
          <Box>
            <AspectRatio ratio={4 / 3} w="40">
              <Image
                alt=""
                src="https://dmuvf4m79e02w.cloudfront.net/_1200x630_crop_center-center_82_none/ICON_Default_Social_Image_Template.jpg?mtime=1668894453 "
              />
            </AspectRatio>
          </Box>
        </HStack>
      </FormControl>
      <SimpleTextFieldController label="Nombre" name="name" placeholder="Ingresa el nombre de tu agencia" />
      <SimpleTextFieldController label="Eslogan" name="name" placeholder="Ingresa el eslogan" />
      <FormControl>
        <FormLabel mb="1">Provincia</FormLabel>
        <SelectField options={provinces} />
        <Input
          _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
          placeholder="Ingresa el provincia"
          py="6"
        />
      </FormControl>
      <HStack spacing="4">
        <FormControl>
          <FormLabel mb="1">Municipio</FormLabel>
          <Input
            _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
            placeholder="Ingresa el municipio"
            py="6"
          />
        </FormControl>
        <FormControl>
          <FormLabel mb="1">Sector</FormLabel>
          <Input
            _focus={{ ringColor: "#165ef0", borderColor: "#165ef0", ring: "1.5" }}
            placeholder="Ingresa el sector"
            py="6"
          />
        </FormControl>
      </HStack>
      <SimpleTextFieldController label="Referencía" name="reference" placeholder="Ingresa la referencia" />
      <SubmitButton mt="4">Validar datos de la agencia</SubmitButton>
    </FormProvider>
  );
};

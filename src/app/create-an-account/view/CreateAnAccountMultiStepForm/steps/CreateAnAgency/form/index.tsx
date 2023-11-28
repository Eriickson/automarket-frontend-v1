import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { AspectRatio, Box, FormControl, FormLabel, HStack, Image } from "@chakra-ui/react";

import { SimpleTextFieldController, SubmitButton } from "@/components/atoms";
import { SelectFieldController } from "@/components/organisms";
import { provincesApi } from "@/store/features/api/provinces";

import { useFormProvider } from "@/hooks/useFormProvider";

import { AutoGeneratedAddressText } from "./AutoGeneratedAddressText";
import { RegisterAgencyFormType, resolver } from "./schema";

interface CreateAnAgencyFormProps extends FormComponentProps<RegisterAgencyFormType> {}
export const CreateAnAgencyForm: FC<CreateAnAgencyFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<RegisterAgencyFormType>({ resolver, defaultValues });

  const { data } = provincesApi.useGetProvincesQuery(null);

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
      <SimpleTextFieldController isRequired label="Nombre" name="name" placeholder="Ingresa el nombre de tu agencia" />
      <SimpleTextFieldController isRequired label="Eslogan" name="slogan" placeholder="Ingresa el eslogan" />
      <SelectFieldController
        label="Provincia"
        name="province"
        options={(data as any)?.data?.map(({ name, id }) => ({ label: name, value: id })) || []}
      />
      <HStack alignItems="flex-start" spacing="4">
        <SelectFieldController label="Municipio" name="municipality" options={[]} />
        <SelectFieldController label="Sector" name="sector" options={[]} />
      </HStack>
      <SimpleTextFieldController label="Referencía" name="reference" placeholder="Ingresa la referencia" />
      <AutoGeneratedAddressText />
      <SubmitButton colorScheme="primary" mt="4">
        Validar datos de la agencia
      </SubmitButton>
    </FormProvider>
  );
};

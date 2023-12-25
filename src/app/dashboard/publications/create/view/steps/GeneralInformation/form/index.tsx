import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { HStack } from "@chakra-ui/react";

import { SelectFieldController } from "@/components/organisms";

import { useFormProvider } from "@/hooks/useFormProvider";

interface GeneralInformationFormProps extends FormComponentProps<{}> {}

export const GeneralInformationForm: FC<GeneralInformationFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<GeneralInformationFormProps>({ defaultValues, id /* , resolver */ });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SelectFieldController label="Marca" name="brand" options={[]} />
      <HStack spacing="4">
        <SelectFieldController label="Modelo" name="model" options={[]} />
        <SelectFieldController label="Tipo de modelo" name="trimLevel" options={[]} />
      </HStack>
      <SelectFieldController label="Carrocería" name="body" options={[]} />
      <SelectFieldController label="Combustible" name="body" options={[]} />
      <HStack spacing="4">
        <SelectFieldController label="Tracción" name="body" options={[]} />
        <SelectFieldController label="Transmisión" name="body" options={[]} />
      </HStack>
      <SelectFieldController label="Condiciones" name="body" options={[]} />
    </FormProvider>
  );
};

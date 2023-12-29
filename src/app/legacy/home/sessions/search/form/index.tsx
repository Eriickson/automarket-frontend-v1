import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Stack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { SelectFieldController } from "@/components/organisms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { resolver, SearchFormType } from "./schema";

interface CreateAnAgencyFormProps extends FormComponentProps<SearchFormType> {}

export const SearchForm: FC<CreateAnAgencyFormProps> = ({ onSubmit, defaultValues }) => {
  const { FormProvider } = useFormProvider<SearchFormType>({ defaultValues, resolver });

  return (
    <FormProvider onSubmit={onSubmit}>
      <SelectFieldController
        allowSearch
        isOptional
        label="Marcas"
        name="brand"
        options={[
          { label: "Audi", value: "audi" },
          { label: "BMW", value: "bmw" },
          { label: "Chevrolet", value: "chevrolet" },
          { label: "Ford", value: "ford" },
          { label: "Mercedes Benz", value: "mercedes-benz" },
        ]}
      />
      <SelectFieldController allowSearch isOptional label="Modelos" name="models" options={[]} />
      <Stack>
        <Button colorScheme="primary" w="full">
          Realizar Búsqueda
        </Button>
      </Stack>
    </FormProvider>
  );
};

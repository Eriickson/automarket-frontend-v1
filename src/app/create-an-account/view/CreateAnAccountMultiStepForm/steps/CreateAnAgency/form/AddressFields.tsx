import React from "react";

import { HStack } from "@chakra-ui/react";

import { SimpleTextFieldController } from "@/components/atoms";
import { SelectFieldController } from "@/components/organisms";
import { provincesApi } from "@/store/features/api/provinces";

import { AutoGeneratedAddressText } from "./AutoGeneratedAddressText";

export const AddressFields = () => {
  const { data } = provincesApi.useGetProvincesQuery(null);

  return (
    <div>
      <SelectFieldController
        label="Provincia"
        name="province"
        options={data?.data?.provinces.map((province) => ({ label: province.name, value: province._id })) || []}
      />
      <HStack alignItems="flex-start" spacing="4">
        <SelectFieldController label="Municipio" name="municipality" options={[]} />
        <SelectFieldController label="Sector" name="sector" options={[]} />
      </HStack>
      <SimpleTextFieldController label="Calle" name="street" placeholder="Ingresa la referencia" />
      <SimpleTextFieldController label="Referencía" name="reference" placeholder="Ingresa la referencia" />
      <AutoGeneratedAddressText />
    </div>
  );
};

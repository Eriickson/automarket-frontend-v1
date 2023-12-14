import React from "react";

import { HStack } from "@chakra-ui/react";

import { SimpleTextFieldController } from "@/components/atoms";
import { Option, SelectFieldController } from "@/components/organisms";
import { municipalitiesApi } from "@/store/features/api/municipalities";
import { provincesApi } from "@/store/features/api/provinces";
import { sectorsApi } from "@/store/features/api/sectors";

import { useFormContext } from "react-hook-form";

import { AutoGeneratedAddressText } from "./AutoGeneratedAddressText";

export const AddressFields = () => {
  const { setValue, getValues } = useFormContext();

  const { data: provinces } = provincesApi.useGetProvincesQuery(null);
  const [getMunicipalities, { data: municipalities }] = municipalitiesApi.useLazyGetMunicipalitiesQuery();
  const [getSectors, { data: sectors }] = sectorsApi.useLazyGetSectorsQuery();


  function handleProvinceChange(values: Option[]) {
    const value = values.at(0)!;
    setValue("municipality", null);
    getMunicipalities({ provinceId: value.value });
  }

  function handleMunicipalityChange(values: Option[]) {
    const value = values.at(0)!;
    const province: Option[] = getValues("province");
    getSectors({ municipalityId: value.value, provinceId: province[0].value });
  }

  return (
    <>
      <SelectFieldController
        allowSearch
        label="Provincia"
        name="province"
        options={provinces?.data.provinces || []}
        onChange={handleProvinceChange}
      />
      <HStack alignItems="flex-start" spacing="4">
        <SelectFieldController
          allowSearch
          label="Municipio"
          name="municipality"
          options={municipalities?.data.municipalities || []}
          onChange={handleMunicipalityChange}
        />
        <SelectFieldController allowSearch label="Sector" name="sector" options={sectors?.data.sectors.map || []} />
      </HStack>
      <SimpleTextFieldController label="Calle" name="street" placeholder="Ingresa la referencia" />
      <SimpleTextFieldController label="Referencía" name="reference" placeholder="Ingresa la referencia" />
      <AutoGeneratedAddressText />
    </>
  );
};

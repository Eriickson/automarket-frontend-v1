import React from "react";

import { Stack, TabPanel } from "@chakra-ui/react";

import { SimpleTextFieldController } from "@/components/atoms";
import { SelectFieldController } from "@/components/organisms";

export const LocationPanel = () => {
  return (
    <TabPanel>
      <Stack>
        <SelectFieldController
          label="Provincia"
          name="location.province"
          options={[
            {
              label: "Santo Domingo",
              value: "santo-domingo",
            },
          ]}
        />
        <SelectFieldController
          label="Municipio"
          name="location.municipality"
          options={[
            {
              label: "Santo Domingo Este",
              value: "santo-domingo-este",
            },
          ]}
        />
        <SelectFieldController
          label="Sector"
          name="location.sector"
          options={[
            {
              label: "Los Mina",
              value: "los-mina",
            },
          ]}
        />
        <SimpleTextFieldController label="Calle" name="location.street" value="Calle Princ. Canabacoa" />
        <SimpleTextFieldController label="Referencia" name="location.reference" />
      </Stack>
    </TabPanel>
  );
};

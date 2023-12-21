import React from "react";

import { Box, HStack, Image, Stack } from "@chakra-ui/react";

import { LabelValueField } from "../LabelValueField";
import { ProfileSession } from "../ProfileSession";
import { AddressModificationModal } from "./AddressModificationModal";

export const Address = () => {
  return (
    <ProfileSession
      ModificationComponent={AddressModificationModal}
      subtitle="Agrega tu dirección para que tus clientes puedan visitarte."
      title="Dirección y Geolocalización"
    >
      <HStack>
        <Stack w="sm">
          <LabelValueField label="Provincia" value="Santiago" />
          <LabelValueField label="Municipio" value="Puñal" />
          <LabelValueField label="Sector" value="Canabacoa" />
          <LabelValueField label="Calle" value="Calle Princ. Canabacoa" />
          <LabelValueField label="Referencia" value="Al lado de La Iglesia Las Mercedes" />
        </Stack>
        <Box flex="1">
          <Image alt="" src="https://miro.medium.com/v2/resize:fit:1117/1*rwaJhH6LdFdSuihdJUuZNw.jpeg" w="full" />
        </Box>
      </HStack>
    </ProfileSession>
  );
};

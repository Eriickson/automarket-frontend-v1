import React from "react";

import { Stack } from "@chakra-ui/react";

import { LabelValueField } from "../LabelValueField";
import { ProfileSession } from "../ProfileSession";

export const PersonalInformationSession = () => {
  return (
    <ProfileSession
      subtitle="Agrega tu información personal para que tus clientes puedan contactarte."
      title="Información personal"
    >
      <Stack>
        <LabelValueField label="Nombre Completo" value="Erickson Manuel Holguín" />
        <LabelValueField label="Fecha de nacimiento" value="22 de dic. de 2023" />
      </Stack>
    </ProfileSession>
  );
};

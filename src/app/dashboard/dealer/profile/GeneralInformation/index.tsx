import React from "react";

import { Avatar, FormControl, FormLabel } from "@chakra-ui/react";

import { LabelValueField } from "../LabelValueField";
import { ProfileSession } from "../ProfileSession";
import { GeneralInformationModificationModal } from "./GeneralInformationModificationModal";

export const GeneralInformation = () => {
  return (
    <ProfileSession
      ModificationComponent={GeneralInformationModificationModal}
      subtitle="Agrega información general sobre tu distribuidora."
      title="Información general"
    >
      <FormControl>
        <FormLabel fontSize="sm" mb="1">
          Logo
        </FormLabel>
        <Avatar
          border="1px"
          h="24"
          shadow="md"
          src="https://cdn.dribbble.com/users/8467716/screenshots/16151265/travel_agency_logo_design-01_4x.jpg"
          w="24"
        />
      </FormControl>
      <LabelValueField label="Nombre" value="Erickson Auto Import" />
      <LabelValueField label="Eslogan" value="Los más preparado en la venta de vehículos en Rep. Dom." />
      <LabelValueField
        label="Breve Descripción"
        value=" Somos una empresa dedicada a la venta de vehículos de la más alta calidad, con los mejores precios del
          mercado. Contamos con un equipo de profesionales que te ayudarán a encontrar el vehículo que más se adapte a
          tus necesidades."
      />
    </ProfileSession>
  );
};

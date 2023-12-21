import React from "react";

import { ModificationModal } from "../components/ModificationModal";
import { ProfileSession } from "../ProfileSession";
import { ContactList } from "./ContactList";

export const ContactInformation = () => {
  return (
    <ProfileSession
      ModificationModal={ModificationModal}
      subtitle="Agrega tu información de contacto para que tus clientes puedan contactarte."
      title="Información de contacto"
    >
      <ContactList />
    </ProfileSession>
  );
};

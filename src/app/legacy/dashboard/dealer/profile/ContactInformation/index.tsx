import React from "react";

import { ProfileSession } from "../ProfileSession";
import { ContactList } from "./ContactList";
import { ContactModificationModal } from "./ContactModificationModal";

export const ContactInformationSession = () => {
  return (
    <ProfileSession
      ModificationComponent={ContactModificationModal}
      subtitle="Agrega tu información de contacto para que tus clientes puedan contactarte."
      title="Información de contacto"
    >
      <ContactList />
    </ProfileSession>
  );
};

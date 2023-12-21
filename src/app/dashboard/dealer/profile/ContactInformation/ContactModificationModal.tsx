import React, { FC, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { ModificationModal } from "../components/ModificationModal";
import { ContactForm } from "./ContactForm";
import { ContactFormValuesType } from "./ContactForm/schema";

interface ContactModificationModalProps {
  title: string;
  disclosure: ReturnType<typeof useDisclosure>;
}

export const ContactModificationModal: FC<ContactModificationModalProps> = ({ disclosure, title }) => {
  const [isLoading] = useState(false);

  async function handleConfirm(values: ContactFormValuesType, disclosure: ReturnType<typeof useDisclosure>) {
    console.log(values);
    disclosure.onClose();
  }

  return (
    <ModificationModal
      disclosure={disclosure}
      Form={ContactForm}
      isLoading={isLoading}
      title={title}
      onConfirm={handleConfirm}
    />
  );
};

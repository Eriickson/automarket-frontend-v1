import React, { FC, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import delay from "delay";

import { ModificationModal } from "../components/ModificationModal";
import { ContactForm } from "./ContactForm";
import { ContactFormValuesType } from "./ContactForm/schema";

interface ContactModificationModalProps {
  title: string;
  disclosure: ReturnType<typeof useDisclosure>;
}

export const ContactModificationModal: FC<ContactModificationModalProps> = ({ disclosure, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm(values: ContactFormValuesType, disclosure: ReturnType<typeof useDisclosure>) {
    setIsLoading(true);

    await delay(2000);
    console.log(values);

    disclosure.onClose();
    setIsLoading(false);
  }

  return (
    <ModificationModal
      defaultValues={{ emails: [], phoneNumbers: [] }}
      disclosure={disclosure}
      Form={ContactForm}
      isLoading={isLoading}
      title={title}
      onConfirm={handleConfirm}
    />
  );
};

import React, { FC, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import delay from "delay";

import { ModificationModal } from "../components/ModificationModal";
import { AddressForm } from "./AddressForm";
import { AddressFormValuesType } from "./AddressForm/schema";

interface AddressModificationModalProps {
  title: string;
  disclosure: ReturnType<typeof useDisclosure>;
}

export const AddressModificationModal: FC<AddressModificationModalProps> = ({ disclosure, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm(values: AddressFormValuesType, disclosure: ReturnType<typeof useDisclosure>) {
    setIsLoading(true);

    await delay(2000);
    console.log(values);

    disclosure.onClose();
    setIsLoading(false);
  }

  return (
    <ModificationModal
      disclosure={disclosure}
      Form={AddressForm}
      isLoading={isLoading}
      title={title}
      onConfirm={handleConfirm}
    />
  );
};

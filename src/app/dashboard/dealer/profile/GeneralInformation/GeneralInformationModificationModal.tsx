import React, { FC, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import delay from "delay";

import { ModificationModal } from "../components/ModificationModal";
import { GeneralInformationForm } from "./GeneralInformationForm";
import { GeneralInformationFormValuesType } from "./GeneralInformationForm/schema";

interface GeneralInformationModificationModalProps {
  title: string;
  disclosure: ReturnType<typeof useDisclosure>;
}

export const GeneralInformationModificationModal: FC<GeneralInformationModificationModalProps> = ({
  disclosure,
  title,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm(values: GeneralInformationFormValuesType, disclosure: ReturnType<typeof useDisclosure>) {
    setIsLoading(true);

    await delay(2000);
    console.log(values);

    disclosure.onClose();
    setIsLoading(false);
  }

  return (
    <ModificationModal
      defaultValues={{ description: "This is a description" }}
      disclosure={disclosure}
      Form={GeneralInformationForm}
      isLoading={isLoading}
      title={title}
      waitTime={30}
      waitTimeUnit="days"
      onConfirm={handleConfirm}
    />
  );
};

import React, { FC, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import delay from "delay";

import { ModificationModal } from "../components/ModificationModal";
import { DigitalPresenceForm } from "./DigitalPresenceForm";
import { DigitalPresenceFormValuesType } from "./DigitalPresenceForm/schema";

interface DigitalPresenceModificationModal {
  title: string;
  disclosure: ReturnType<typeof useDisclosure>;
}

export const DigitalPresenceModificationModal: FC<DigitalPresenceModificationModal> = ({ disclosure, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm(values: DigitalPresenceFormValuesType, disclosure: ReturnType<typeof useDisclosure>) {
    setIsLoading(true);

    await delay(2000);
    console.log(values);

    disclosure.onClose();
    setIsLoading(false);
  }

  return (
    <ModificationModal
      defaultValues={{ messagingServices: [], socialMedia: [], websites: [] }}
      disclosure={disclosure}
      Form={DigitalPresenceForm}
      isLoading={isLoading}
      title={title}
      waitTime={30}
      waitTimeUnit="days"
      onConfirm={handleConfirm}
    />
  );
};

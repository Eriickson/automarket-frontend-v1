import React, { FC, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import delay from "delay";

import { ModificationModal } from "../components/ModificationModal";
import { ScheduleForm } from "./ScheduleForm";
import { ScheduleFormValuesType } from "./ScheduleForm/schema";

interface ScheduleModificationModalProps {
  title: string;
  disclosure: ReturnType<typeof useDisclosure>;
}

export const ScheduleModificationModal: FC<ScheduleModificationModalProps> = ({ disclosure, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm(values: ScheduleFormValuesType, disclosure: ReturnType<typeof useDisclosure>) {
    setIsLoading(true);

    await delay(2000);
    console.log(values);

    disclosure.onClose();
    setIsLoading(false);
  }

  return (
    <ModificationModal
      defaultValues={{
        schedule: Array.from({ length: 7 }, () => ({ startTime: "", endTime: "", isClosed: false })),
        isGroupedWeekDays: true,
      }}
      disclosure={disclosure}
      Form={ScheduleForm}
      isLoading={isLoading}
      title={title}
      waitTime={30}
      waitTimeUnit="days"
      onConfirm={handleConfirm}
    />
  );
};

import React, { FC, useId, useState } from "react";

import { FormComponentProps } from "@atmk/components";

import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { AlertDialogConfirmation } from "../AlertDialogConfirmation";

type WaitTimeUnit = "days" | "months" | "years";

const waitTimeUnitsMapper: Record<WaitTimeUnit, string> = {
  days: "días",
  months: "meses",
  years: "años",
};

interface ModificationModalProps<TValue> {
  title: string;
  disclosure: ReturnType<typeof useDisclosure>;
  isLoading: boolean;
  onConfirm: (values: TValue, disclosure: ReturnType<typeof useDisclosure>) => void;
  Form: FC<FormComponentProps<TValue>>;
  defaultValues?: TValue;
  waitTime: number;
  waitTimeUnit: WaitTimeUnit;
}

export const ModificationModal = <TValue,>({
  isLoading,
  onConfirm,
  title,
  disclosure,
  Form,
  defaultValues,
  waitTimeUnit,
  waitTime,
}: ModificationModalProps<TValue>) => {
  const formId = useId();

  const [retrieveValues, setRetrieveValues] = useState<TValue | undefined>(defaultValues);

  const alertDialogDisclosure = useDisclosure();

  async function handleSubmit(values: TValue) {
    setRetrieveValues(values);
    disclosure.onClose();
    alertDialogDisclosure.onOpen();
  }

  return (
    <>
      <Modal isCentered isOpen={disclosure.isOpen} motionPreset="slideInBottom" size="xl" onClose={disclosure.onClose}>
        <ModalOverlay bgColor="#000000AF" />
        <ModalContent rounded="sm">
          <ModalHeader>
            <Text>{title}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form defaultValues={retrieveValues} id={formId} onSubmit={handleSubmit} />
          </ModalBody>
          <ModalFooter>
            <HStack spacing="1">
              <Button
                bgColor="gray.100"
                colorScheme="secondary"
                mr={3}
                variant="ghost"
                onClick={() => {
                  disclosure.onClose();
                  setRetrieveValues(defaultValues);
                }}
              >
                Cancelar
              </Button>
              <Button colorScheme="primary" form={formId} type="submit">
                Guardar Cambios
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AlertDialogConfirmation
        disclosure={alertDialogDisclosure}
        isLoading={isLoading}
        waitTime={`${waitTime} ${waitTimeUnitsMapper[waitTimeUnit]}`}
        onCancel={() => {
          alertDialogDisclosure.onClose();
          disclosure.onOpen();
        }}
        onConfirm={() => onConfirm(retrieveValues as TValue, alertDialogDisclosure)}
      />
    </>
  );
};

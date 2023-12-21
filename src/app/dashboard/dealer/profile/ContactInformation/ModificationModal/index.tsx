import React, { FC, useState } from "react";

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
  useToast,
} from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { AlertDialogConfirmation } from "../AlertDialogConfirmation";

interface ModificationModalProps {
  disclosure: ReturnType<typeof useDisclosure>;
}

export const ModificationModal: FC<ModificationModalProps> = ({ disclosure }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const alertDialogDisclosure = useDisclosure();

  async function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alertDialogDisclosure.onClose();
      toast({
        status: "success",
        title: "Información actualizada",
        description: "La información de contacto ha sido actualizada correctamente.",
        variant: "left-accent",
        position: "top-right",
      });
    }, 2000);
  }

  return (
    <>
      <Modal isCentered isOpen={disclosure.isOpen} motionPreset="slideInBottom" size="2xl" onClose={disclosure.onClose}>
        <ModalOverlay bgColor="#000000AF" />
        <ModalContent rounded="sm">
          <ModalHeader px="4">
            <Text>Información de Contacto</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px="4">Hola a todos</ModalBody>

          <ModalFooter justifyContent="space-between" px="4">
            <Button backgroundColor="red.50" colorScheme="red" variant="ghost">
              Restablecer
            </Button>
            <HStack spacing="1">
              <Button bgColor="gray.100" colorScheme="secondary" mr={3} variant="ghost" onClick={disclosure.onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="primary"
                onClick={() => {
                  disclosure.onClose();
                  alertDialogDisclosure.onOpen();
                }}
              >
                Guardar Cambios
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AlertDialogConfirmation
        disclosure={alertDialogDisclosure}
        isLoading={isLoading}
        waitTime="90 días"
        onCancel={() => {
          alertDialogDisclosure.onClose();
          disclosure.onOpen();
        }}
        onConfirm={() => {
          handleSubmit();
        }}
      />
    </>
  );
};

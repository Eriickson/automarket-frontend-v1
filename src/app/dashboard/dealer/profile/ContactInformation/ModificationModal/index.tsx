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
import { ContactForm } from "../ContactForm";
import { ContactFormValuesType } from "../ContactForm/schema";

interface ModificationModalProps {
  disclosure: ReturnType<typeof useDisclosure>;
}

export const ModificationModal: FC<ModificationModalProps> = ({ disclosure }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const [retrieveContacts, setRetrieveContacts] = useState<ContactFormValuesType>({ emails: [], phoneNumbers: [] });

  const alertDialogDisclosure = useDisclosure();

  async function handleSubmit(values: ContactFormValuesType) {
    setRetrieveContacts(values);
    disclosure.onClose();
    alertDialogDisclosure.onOpen();
  }

  async function handleConfirm() {
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
      setRetrieveContacts({ emails: [], phoneNumbers: [] });
    }, 2000);
  }

  return (
    <>
      <Modal isCentered isOpen={disclosure.isOpen} motionPreset="slideInBottom" size="2xl" onClose={disclosure.onClose}>
        <ModalOverlay bgColor="#000000AF" />
        <ModalContent rounded="sm">
          <ModalHeader>
            <Text>Información de Contacto</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm defaultValues={retrieveContacts} onSubmit={handleSubmit} />
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Button backgroundColor="red.50" colorScheme="red" variant="ghost">
              Restablecer
            </Button>
            <HStack spacing="1">
              <Button bgColor="gray.100" colorScheme="secondary" mr={3} variant="ghost" onClick={disclosure.onClose}>
                Cancelar
              </Button>
              <Button colorScheme="primary" form="contact-form" type="submit">
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
        onConfirm={handleConfirm}
      />
    </>
  );
};

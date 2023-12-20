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

interface ModificationModalProps {
  disclosure: ReturnType<typeof useDisclosure>;
}

export const ModificationModal: FC<ModificationModalProps> = ({ disclosure }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      disclosure.onClose();
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
      <Modal
        isCentered
        closeOnEsc={!isLoading}
        closeOnOverlayClick={!isLoading}
        isOpen={disclosure.isOpen}
        size="2xl"
        onClose={disclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader px="4">
            <Text>Información de Contacto</Text>
          </ModalHeader>
          <ModalCloseButton isDisabled={isLoading} />
          <ModalBody px="4">Hola a todos</ModalBody>

          <ModalFooter justifyContent="space-between" px="4">
            <Button backgroundColor="red.50" colorScheme="red" isLoading={isLoading} variant="ghost">
              Restablecer
            </Button>
            <HStack spacing="1">
              <Button
                bgColor="gray.100"
                colorScheme="secondary"
                isLoading={isLoading}
                mr={3}
                variant="ghost"
                onClick={disclosure.onClose}
              >
                Cancelar
              </Button>
              <Button colorScheme="primary" isLoading={isLoading} onClick={handleSubmit}>
                Guardar Cambios
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

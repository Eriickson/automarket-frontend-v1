import React, { FC } from "react";

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

interface ModificationModalProps {
  isLoading?: boolean;
}

export const ModificationModal: FC<ModificationModalProps> = ({ isLoading = true }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        isCentered
        closeOnEsc={!isLoading}
        closeOnOverlayClick={!isLoading}
        isOpen={isOpen}
        size="2xl"
        onClose={onClose}
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
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button colorScheme="primary" isLoading={isLoading}>
                Guardar Cambios
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

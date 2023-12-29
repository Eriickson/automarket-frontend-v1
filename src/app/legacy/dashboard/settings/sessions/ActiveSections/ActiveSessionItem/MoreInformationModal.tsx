import React, { FC } from "react";

import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { Button } from "@/components/atoms";

interface MoreInformationModalProps {
  children: React.ReactNode;
}

export const MoreInformationModal: FC<MoreInformationModalProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>

      <Modal isCentered isOpen={isOpen} size="lg" onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>Oficina Principal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>dasdsd</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" size="sm" variant="ghost" onClick={onClose}>
              Remover Sesión
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

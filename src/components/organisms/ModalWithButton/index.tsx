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

export interface ModalComponentProps {
  disclosure: ReturnType<typeof useDisclosure>;
}

interface ModalWithButtonProps {
  title?: React.ReactNode;
  isDisabled?: boolean;
  buttonComponent: React.ReactNode;
  BodyComponent: FC<ModalComponentProps>;
  FooterComponent?: (props: ModalComponentProps) => React.ReactNode;
}

export const ModalWithButton: FC<ModalWithButtonProps> = ({
  title,
  BodyComponent,
  FooterComponent,
  buttonComponent,
  isDisabled,
}) => {
  const disclosure = useDisclosure();

  return (
    <>
      <Box onClick={disclosure.onOpen}>{buttonComponent}</Box>
      <Modal
        isCentered
        closeOnEsc={!isDisabled}
        closeOnOverlayClick={!isDisabled}
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent mx="1" px="0" rounded="sm">
          <ModalHeader fontSize="md" pb="2" pt="3" px="2">
            {title}
          </ModalHeader>
          <ModalCloseButton isDisabled={isDisabled} right="1" top="1" />
          <ModalBody px="2">
            <BodyComponent disclosure={disclosure} />
          </ModalBody>
          <ModalFooter justifyContent="flex-start" pb="3" pt="2" px="2">
            {FooterComponent?.({ disclosure })}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

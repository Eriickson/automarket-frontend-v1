"use client";

import React from "react";

import { Center, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import useFullScreenGalleryContext from "./context";
import { MainSwiper } from "./MainSwiper";
import { MiniatureSwiper } from "./MiniatureSwiper";
import { TopBar } from "./TopBar";

export const FullScreenGalleryModal = () => {
  const { isOpen, onClose } = useFullScreenGalleryContext();

  return (
    <Modal isCentered isOpen={isOpen} size="full" onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor="black" h="100dvh" rounded="none">
        <ModalHeader border="1px" pr="4">
          <TopBar />
        </ModalHeader>
        <ModalBody p="1">
          <Center h="full">
            <MainSwiper />
          </Center>
        </ModalBody>
        <ModalFooter border="1px" pr="4">
          <MiniatureSwiper />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

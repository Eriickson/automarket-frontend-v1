"use client";

import React from "react";

import Image from "next/image";

import {
  AspectRatio,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import useFullScreenGalleryContext from "./context";
import { MainSwiper } from "./MainSwiper";
import { TopBar } from "./TopBar";

export const FullScreenGalleryModal = () => {
  const { isOpen, onClose, images } = useFullScreenGalleryContext();

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
        <ModalFooter border="1px" justifyContent="center" pr="4">
          {images.map((image, index) => (
            <AspectRatio key={index} ratio={4 / 3} w="44">
              <Image alt="" height={240} src={image} width={320} />
            </AspectRatio>
          ))}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

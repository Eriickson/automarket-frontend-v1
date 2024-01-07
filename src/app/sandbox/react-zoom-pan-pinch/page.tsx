"use client";
import React, { useState } from "react";

import Image from "next/image";

import {
  Box,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { IconButton } from "@/components/atoms";

import { Grid, Maximize, Minimize, PlayCircle, X } from "react-feather";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const images = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ReactZoomPanPinchPage = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  function handleCloseGallery() {
    document.exitFullscreen();
    onClose();
  }

  return (
    <Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="black" h="100dvh" rounded="none">
          <ModalHeader border="1px">
            <HStack color="white">
              <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost" onClick={toggleFullscreen}>
                {isFullscreen ? <Minimize size="1.1rem" /> : <Maximize size="1.1rem" />}
              </IconButton>
              <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost">
                <Grid size="1.1rem" />
              </IconButton>
              <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost">
                <PlayCircle size="1.2rem" />
              </IconButton>
              <IconButton colorScheme="whiteAlpha" size="xs" variant="ghost" onClick={handleCloseGallery}>
                <X size="1.25rem" />
              </IconButton>
            </HStack>
          </ModalHeader>
          <ModalBody p="1">
            <Center h="full">
              <Swiper
                slidesPerView={1}
                spaceBetween={25}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Box pb="24">
                      <TransformWrapper maxScale={1.6} minScale={1}>
                        <TransformComponent>
                          <Image alt="" height={800} src={image} width={800} />
                        </TransformComponent>
                      </TransformWrapper>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Center>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ReactZoomPanPinchPage;

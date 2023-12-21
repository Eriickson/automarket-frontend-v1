import React, { FC, useState } from "react";

import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  // Alert Dialog
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

  const cancelRef = React.useRef<any>(null);

  const alertDialogDisclosure = useDisclosure();

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
        motionPreset="slideInBottom"
        size="2xl"
        onClose={disclosure.onClose}
      >
        <ModalOverlay bgColor="#000000AF" />
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
              <Button
                colorScheme="primary"
                isLoading={isLoading}
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
      <AlertDialog
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
        isOpen={alertDialogDisclosure.isOpen}
        leastDestructiveRef={cancelRef}
        motionPreset="slideInBottom"
        size="xl"
        onClose={alertDialogDisclosure.onClose}
      >
        <AlertDialogOverlay bgColor="#000000AF">
          <AlertDialogContent rounded="sm">
            <AlertDialogHeader px="4">Actualizar Información</AlertDialogHeader>

            <AlertDialogBody px="4">
              <Text mb="2">¿Estás seguro que deseas guardar los cambios?</Text>
              <Alert alignItems="flex-start" status="warning" variant="left-accent">
                <AlertIcon />
                <Text color="orange.900" fontSize="sm">
                  Deberás esperar almenos 90 días para modificar esta información nuevamente.{" "}
                  <Text as="strong">Deseas continuar?</Text>
                </Text>
              </Alert>
            </AlertDialogBody>
            <AlertDialogFooter px="4">
              <Button
                onClick={() => {
                  alertDialogDisclosure.onClose();
                  disclosure.onOpen();
                }}
              >
                Cancelar
              </Button>
              <Button colorScheme="primary" ml={3} onClick={alertDialogDisclosure.onClose}>
                Sí, Continuar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

import React, { FC } from "react";

import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Button } from "@/components/atoms";

interface AlertDialogConfirmationProps {
  isLoading: boolean;
  waitTime: string;
  disclosure: ReturnType<typeof useDisclosure>;
  onConfirm: () => void;
  onCancel: () => void;
}
export const AlertDialogConfirmation: FC<AlertDialogConfirmationProps> = ({
  disclosure,
  isLoading,
  onConfirm,
  waitTime,
  onCancel,
}) => {
  const cancelRef = React.useRef(null);

  return (
    <AlertDialog
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isOpen={disclosure.isOpen}
      leastDestructiveRef={cancelRef}
      motionPreset="slideInBottom"
      size="xl"
      onClose={disclosure.onClose}
    >
      <AlertDialogOverlay bgColor="#000000AF">
        <AlertDialogContent rounded="sm">
          <AlertDialogHeader px="4">Actualizar Información</AlertDialogHeader>

          <AlertDialogBody px="4">
            <Text mb="2">¿Estás seguro que deseas guardar los cambios?</Text>
            <Alert alignItems="flex-start" status="warning" variant="left-accent">
              <AlertIcon />
              <Text color="orange.900" fontSize="sm">
                Deberás esperar almenos {waitTime} para modificar esta información nuevamente.{" "}
                <Text as="strong">Deseas continuar?</Text>
              </Text>
            </Alert>
          </AlertDialogBody>
          <AlertDialogFooter px="4">
            <Button isLoading={isLoading} onClick={() => onCancel()}>
              Cancelar
            </Button>
            <Button
              colorScheme="primary"
              isLoading={isLoading}
              ml={3}
              onClick={() => {
                onConfirm();
              }}
            >
              Sí, Continuar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

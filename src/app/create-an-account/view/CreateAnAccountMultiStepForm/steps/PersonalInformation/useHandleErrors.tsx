import { useToast } from "@chakra-ui/react";

export const useHandleErrors = () => {
  const toast = useToast();

  async function handleErrors(response: { error: unknown }) {
    toast({
      title: "Cantidad máxima de intentos alcanzada",
      description: "Por favor, espera unos minutos y vuelve a intentarlo.",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  }

  return { handleErrors };
};

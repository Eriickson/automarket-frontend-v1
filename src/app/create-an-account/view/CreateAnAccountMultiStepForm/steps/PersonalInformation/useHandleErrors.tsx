import { useToast } from "@chakra-ui/react";

export const useHandleErrors = () => {
  const toast = useToast();

  async function handleErrors(response: { error: unknown }) {
    const data = response.error as any;

    let title = data.data.message;
    let description = data.data.detail;

    if (data.data === "Network Error") {
      title = "No se pudo conectar con el servidor";
      description = "Verifica tu conexión a internet y vuelve a intentarlo.";
    }

    toast({ title, description, status: "error", duration: 5000, isClosable: true, position: "top-right" });
  }

  return { handleErrors };
};

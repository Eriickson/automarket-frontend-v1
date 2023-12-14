import { useToast } from "@chakra-ui/react";

export const useHandleErrors = () => {
  const toast = useToast();

  async function handleErrors(response: { error: unknown }) {
    const data = response.error as any;

    toast({
      title: data.data.message,
      description: data.data.detail,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  }

  return { handleErrors };
};

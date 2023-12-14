import { Box, Center, HStack, Stack, Text, useToast } from "@chakra-ui/react";

import { Check } from "react-feather";

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
      // render: ({ title, description }) => (
      //   <HStack alignItems="flex-start" bg="white" border="1px" borderColor="gray.200" borderRadius="sm" px="4" py="2">
      //     <Center bgColor="red.500" color="white" p="1.5" rounded="full">
      //       <Check size="1.25rem" strokeWidth="2.5" />
      //     </Center>
      //     <Box>
      //       <Text fontSize="sm" fontWeight="bold">
      //         {title}
      //       </Text>
      //       <Text fontSize="sm">{description}</Text>
      //     </Box>
      //   </HStack>
      // ),
    });
  }

  return { handleErrors };
};

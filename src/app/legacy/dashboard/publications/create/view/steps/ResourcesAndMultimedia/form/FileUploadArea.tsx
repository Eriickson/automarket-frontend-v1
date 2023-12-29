import React from "react";

import { Box, Text, VStack } from "@chakra-ui/react";

import { Image } from "react-feather";

export const FileUploadArea = () => {
  return (
    <Box w="full">
      <Box bgColor="gray.50" border="2px" borderColor="gray.300" borderStyle="dashed" p="8" rounded="md">
        <VStack>
          <VStack>
            <Image size="4rem" strokeWidth="1" />
            <Text fontWeight="medium">
              Arrastra y suelta tus archivos aquí, o{" "}
              <Text as="span" color="primary.500" fontWeight="bold">
                selecciona archivos
              </Text>
            </Text>
            <Text fontSize="sm">
              Tamaño máximo de archivo <strong>50 mb</strong>
            </Text>
            <Text fontSize="sm">
              Formatos permitidos: <strong>.jpg</strong>, <strong>.png</strong>, <strong>.gif</strong>
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

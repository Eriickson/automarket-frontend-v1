import React from "react";

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, HStack, Stack, Text } from "@chakra-ui/react";

import { ChevronRight } from "react-feather";

const CreatePublicationPage = () => {
  return (
    <Box>
      <Stack>
        {/* <Breadcrumb separator={<ChevronRight size="1rem" strokeWidth="3" />} spacing="2.5">
          <BreadcrumbItem>
            <BreadcrumbLink color="gray" fontWeight="semibold" href="#">
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink color="gray" fontWeight="semibold" href="#">
              Mis Publicaciones
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight="semibold" href="#">
              Crear Publicación
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb> */}
        <Box>
          <Text fontSize="2xl">
            <b>Crear Publicación</b>
          </Text>
          <Text>
            {/* Descripción */}
            En esta sección podrás crear una nueva publicación para tu empresa, recuerda que debes completar todos los
            campos para poder publicar.
          </Text>
        </Box>
        <Box>
          <HStack spacing="6">
            <HStack>
              <Center bgColor="primary.500" color="white" h="10" rounded="full" w="10">
                <Text as="b">1</Text>
              </Center>
              <Text as="b">Información General</Text>
            </HStack>
            <ChevronRight size="1rem" strokeWidth="3" />
            <HStack>
              <Center bgColor="primary.500" color="white" h="10" rounded="full" w="10">
                <Text as="b">1</Text>
              </Center>
              <Text as="b">Recursos y Multimedia</Text>
            </HStack>
            <ChevronRight size="1rem" strokeWidth="3" />
            <HStack>
              <Center border="1px" borderColor="gray.300" h="10" rounded="full" shadow="md" w="10">
                <Text as="b">1</Text>
              </Center>
              <Text as="b" color="gray">
                Confirmar y Publicar
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CreatePublicationPage;

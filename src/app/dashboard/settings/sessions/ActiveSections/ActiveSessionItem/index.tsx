import React, { FC } from "react";

import { HStack, Image, Stack, Text } from "@chakra-ui/react";

import { ItemInfo } from "../ItemInfo";
import { MoreInformationModal } from "./MoreInformationModal";

interface ActiveSessionItemProps {
  isCurrent?: boolean;
}

export const ActiveSessionItem: FC<ActiveSessionItemProps> = ({ isCurrent }) => {
  return (
    <Stack spacing="1" w="max-content">
      <MoreInformationModal>
        <Stack
          _hover={{ bgColor: "gray.100" }}
          border="1px"
          borderColor="gray.300"
          cursor="pointer"
          p="3"
          rounded="sm"
          spacing="1"
          transitionDuration="200ms"
          w="max-content"
        >
          <ItemInfo
            icon={<Image alt="icon" boxSize="5" src="https://cdn-icons-png.flaticon.com/512/167/167502.png" />}
            label="Nombre"
            value="Oficina Principal"
          />
          <ItemInfo
            icon={<Image alt="icon" boxSize="5" src="   https://cdn-icons-png.flaticon.com/512/1694/1694647.png" />}
            label="Dispositivo"
            value="Desconocido"
          />
          <ItemInfo
            icon={<Image alt="icon" boxSize="5" src="https://cdn-icons-png.flaticon.com/512/5056/5056861.png" />}
            label="Navegador"
            value="Desconocido"
          />
          <ItemInfo
            icon={<Image alt="icon" boxSize="5" src="https://cdn-icons-png.flaticon.com/512/535/535137.png" />}
            label="Ubicación"
            value="Santiago de los Caballeros, Rep. Dom."
          />
        </Stack>
      </MoreInformationModal>
      {isCurrent ? (
        <HStack spacing="1">
          <Image alt="icon" boxSize="4" ml="0.5" mr="1" src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" />
          <Text color="gray.600" fontSize="sm" fontWeight="medium">
            Tú Sesión actual
          </Text>
        </HStack>
      ) : null}
    </Stack>
  );
};

/*    <Flex display="none" justifyContent="space-between">
          <Box>
            <Text color="gray.600" fontSize="sm">
              Sesión Activa
            </Text>
          </Box>
          <HStack justifyContent="flex-end" spacing="4">
            <Button colorScheme="red" size="sm" variant="link" w="max-content">
              Remover Sesión
            </Button>
            <Button colorScheme="blue" size="sm" variant="link" w="max-content">
              Más Información
            </Button>
          </HStack>
        </Flex> */

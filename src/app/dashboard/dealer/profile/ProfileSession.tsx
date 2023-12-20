import React, { FC, useState } from "react";

import { Box, HStack, IconButton, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";

import { Edit } from "react-feather";

interface ProfileSessionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  ModificationModal?: FC<{
    isLoading?: boolean;
    disclosure: ReturnType<typeof useDisclosure>;
  }>;
}

export const ProfileSession: FC<ProfileSessionProps> = ({ children, subtitle, title, ModificationModal }) => {
  const disclosure = useDisclosure();
  const [allowModifyInformation, setAllowModifyInformation] = useState(true);

  const [isHover, setIsHover] = useState(false);
  const toast = useToast();

  return (
    <HStack alignItems="flex-start" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Box w="2xl">
        <Box mb="4">
          <HStack>
            <Text fontSize="lg" fontWeight="semibold">
              {title}
            </Text>
            <IconButton
              aria-label=""
              display={isHover ? "inline-flex" : "none"}
              rounded="sm"
              size="xs"
              variant="ghost"
              // onClick={() =>
              //   toast({
              //     status: "warning",
              //     title: "Información modificada recientemente",
              //     description: "Debes esperar almenos 30 min para poder modificar esta información.",
              //     variant: "left-accent",
              //     position: "top-right",
              //   })
              // }
              // onClick={disclosure.onOpen}
              onClick={() => {
                if (allowModifyInformation) {
                  disclosure.onOpen();
                } else {
                  toast({
                    status: "warning",
                    title: "Información modificada recientemente",
                    description: "Debes esperar almenos 30 min para poder modificar esta información.",
                    variant: "left-accent",
                    position: "top-right",
                  });
                }
              }}
            >
              <Edit size="16" />
            </IconButton>
          </HStack>
          <Text fontSize="sm">{subtitle}</Text>
          <Text fontSize="sm">
            Últ. act. <Text as="span">Hace 2 días</Text>
          </Text>
        </Box>
        <HStack>
          {/* <Button rounded="sm">Cancelar</Button>
          <Button colorScheme="primary" rounded="sm">
            Guardar Cambios
          </Button> */}
        </HStack>
      </Box>
      <Stack flex="1" spacing="4">
        {children}
      </Stack>
      {ModificationModal ? <ModificationModal disclosure={disclosure} /> : null}
    </HStack>
  );
};

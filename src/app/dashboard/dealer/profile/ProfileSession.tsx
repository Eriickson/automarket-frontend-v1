import React, { FC, useState } from "react";

import { Box, HStack, IconButton, Stack, Text } from "@chakra-ui/react";

import { Edit } from "react-feather";

interface ProfileSessionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const ProfileSession: FC<ProfileSessionProps> = ({ children, subtitle, title }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <HStack alignItems="flex-start" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Box w="2xl">
        <Box mb="4">
          <HStack>
            <Text fontSize="lg" fontWeight="semibold">
              {title}
            </Text>
            <IconButton aria-label="" display={isHover ? "inline-flex" : "none"} rounded="sm" size="xs" variant="ghost">
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
    </HStack>
  );
};

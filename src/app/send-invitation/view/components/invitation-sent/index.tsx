import React, { FC } from "react";

import { Center, VStack } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

import { Check } from "react-feather";

interface InvitationSentProps {
  onResendInvitation(): void;
}

export const InvitationSent: FC<InvitationSentProps> = ({ onResendInvitation }) => {
  return (
    <VStack spacing="8">
      <Center backgroundColor="primary.50" color="primary.600" h="20" rounded="full" w="20">
        <Check size="3rem" strokeWidth={1.75} />
      </Center>
      <Button colorScheme="primary" w="full">
        Volver a inicio
      </Button>
      <Button textDecoration="underline" variant="link" onClick={onResendInvitation}>
        Solicitar nueva invitación
      </Button>
    </VStack>
  );
};

import React from "react";

import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

import { ProfileSession } from "../ProfileSession";
import { DigitalPresenceModificationModal } from "./DigitalPresenceModificationModal";

export const DigitalPresenceSession = () => {
  return (
    <ProfileSession
      ModificationComponent={DigitalPresenceModificationModal}
      subtitle="Agrega tus redes sociales para que tus clientes puedan contactarte."
      title="Presencia Digital"
    >
      <List spacing="2">
        <ListItem>
          <HStack alignItems="flex-start" spacing="2">
            <Image alt="" h="6" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" w="6" />
            <Text fontWeight="semibold">facebook.com/EriicksonLOoney</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack alignItems="flex-start" spacing="2">
            <Image alt="" h="6" src="https://cdn-icons-png.flaticon.com/512/2807/2807258.png" w="6" />
            <Text fontWeight="semibold">www.automarket.com</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack alignItems="flex-start" spacing="2">
            <Image alt="" h="6" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" w="6" />
            <Text fontWeight="semibold">instagram.com/eriicksonlooney</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack alignItems="flex-start" spacing="2">
            <Image alt="" h="6" src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" w="6" />
            <Text fontWeight="semibold">twitter.com/erickson01d</Text>
          </HStack>
        </ListItem>
      </List>
    </ProfileSession>
  );
};

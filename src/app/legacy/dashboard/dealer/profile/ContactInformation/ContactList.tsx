import React from "react";

import { HStack } from "@chakra-ui/react";

import { EmailContactList } from "./EmailsList";
import { PhoneNumbersList } from "./PhoneNumbersList";

export const ContactList = () => {
  return (
    <HStack>
      <PhoneNumbersList />
      <EmailContactList />
    </HStack>
  );
};

import React from "react";

import {
  Box,
  HStack,
  IconButton,
  List,
  ListItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { Button, SimpleTextFieldController } from "@/components/atoms";

import { useFormProvider } from "@/hooks/useFormProvider";

import { EmailPanel } from "./EmailPanel";
import { PhoneNumberPanel } from "./PhoneNumberPanel";

export const ContactForm = () => {
  const { FormProvider, methods } = useFormProvider({
    defaultValues: { phoneNumbers: [], emails: [] },
  });

  const phoneNumbers = methods.watch("phoneNumbers");
  const emails = methods.watch("emails");

  return (
    <FormProvider
      onSubmit={async (data) => {
        console.log(data);
      }}
    >
      <Stack>
        <Text fontWeight="medium"></Text>
        <Tabs colorScheme="primary" variant="enclosed-colored">
          <TabList>
            <Tab mr="2" px="2.5" py="1.5">
              <Text fontSize="sm">
                Números telefónicos <b>({phoneNumbers.length})</b>
              </Text>
            </Tab>
            <Tab px="2.5" py="1.5">
              <Text fontSize="sm">
                Correos electrónico <b>({emails.length})</b>
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <PhoneNumberPanel />
            <EmailPanel />
          </TabPanels>
        </Tabs>
      </Stack>
    </FormProvider>
  );
};

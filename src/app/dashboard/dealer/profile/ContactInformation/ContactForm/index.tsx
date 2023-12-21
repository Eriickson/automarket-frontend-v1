import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Stack, Tab, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

import { EmailPanel } from "./EmailPanel";
import { PhoneNumberPanel } from "./PhoneNumberPanel";
import { ContactFormValuesType, resolver } from "./schema";

interface ContactFormProps extends FormComponentProps<ContactFormValuesType> {}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider, methods } = useFormProvider<ContactFormValuesType>({ defaultValues, resolver, id });

  const phoneNumbers = methods.watch("phoneNumbers");
  const emails = methods.watch("emails");

  return (
    <FormProvider onSubmit={onSubmit}>
      <Stack>
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

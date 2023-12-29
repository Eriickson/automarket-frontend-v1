import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Tab, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

import { FieldPath } from "react-hook-form";

import { EmailPanel } from "./EmailPanel";
import { PhoneNumberPanel } from "./PhoneNumberPanel";
import { ContactFormValuesType, resolver } from "./schema";

interface ContactFormProps extends FormComponentProps<ContactFormValuesType> {}

const tabsItems = [
  {
    label: "Números telefónicos",
    field: "phoneNumbers" as FieldPath<ContactFormValuesType>,
    TabPanel: PhoneNumberPanel,
  },
  {
    label: "Correos electrónico",
    field: "emails" as FieldPath<ContactFormValuesType>,
    TabPanel: EmailPanel,
  },
];

export const ContactForm: FC<ContactFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider, methods } = useFormProvider<ContactFormValuesType>({ defaultValues, resolver, id });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Tabs colorScheme="primary" variant="enclosed-colored">
        <TabList>
          {tabsItems.map((item) => (
            <Tab key={item.field} mr="2" px="2.5" py="1.5">
              <Text fontSize="sm">
                {item.label} <b>({(methods.watch(item.field) as []).length})</b>
              </Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabsItems.map((tabItem) => (
            <tabItem.TabPanel key={tabItem.field} />
          ))}
        </TabPanels>
      </Tabs>
    </FormProvider>
  );
};

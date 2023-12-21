import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Tab, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

import { MessagingServicesPanel } from "./MessagingServices";
import { DigitalPresenceFormValuesType, resolver } from "./schema";
import { SocialMediaPanel } from "./SocialMedia";
import { WebsitesPanel } from "./Websites";

const tabsItems = [
  {
    label: "Redes sociales",
    field: "socialMedia",
    TabPanel: SocialMediaPanel,
  },
  {
    label: "Servicios de mensajería",
    field: "messagingServices",
    TabPanel: MessagingServicesPanel,
  },
  {
    label: "Sitios web",
    field: "websites",
    TabPanel: WebsitesPanel,
  },
];
interface DigitalPresenceFormProps extends FormComponentProps<DigitalPresenceFormValuesType> {}

export const DigitalPresenceForm: FC<DigitalPresenceFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<DigitalPresenceFormValuesType>({ defaultValues, resolver, id });

  return (
    <FormProvider onSubmit={onSubmit}>
      <Tabs colorScheme="primary" variant="enclosed-colored">
        <TabList>
          {tabsItems.map((item) => (
            <Tab key={item.field} mr="2" px="2.5" py="1.5">
              <Text fontSize="sm">{item.label}</Text>
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

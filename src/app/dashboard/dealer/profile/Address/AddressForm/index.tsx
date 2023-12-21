import React, { FC } from "react";

import { FormComponentProps } from "@atmk/components";

import { Tab, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react";

import { useFormProvider } from "@/hooks/useFormProvider";

import { GeolocationPanel } from "./GeolocationPanel";
import { LocationPanel } from "./LocationPanel";
import { AddressFormValuesType, resolver } from "./schema";

interface AddressFormProps extends FormComponentProps<AddressFormValuesType> {}

const tabsItems = [
  {
    label: "Dirección",
    field: "location",
    TabPanel: LocationPanel,
  },
  // {
  //   label: "Geolocalización",
  //   field: "geolocation",
  //   TabPanel: GeolocationPanel,
  // },
];

export const AddressForm: FC<AddressFormProps> = ({ onSubmit, defaultValues, id }) => {
  const { FormProvider } = useFormProvider<AddressFormValuesType>({ defaultValues, resolver, id });


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

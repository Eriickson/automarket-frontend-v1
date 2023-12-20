import React from "react";

import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

import { ActiveTab } from "./tabs/active";
import { ArchivedTab } from "./tabs/archived";
import { DraftsTabs } from "./tabs/drafts";

const tabbarItems = [
  { label: "Activos", value: "active", Tab: ActiveTab },
  { label: "Borradores", value: "drafts", Tab: DraftsTabs },
  { label: "Archivados", value: "archived", Tab: ArchivedTab },
];

export const Tabbar = () => {
  return (
    <Box>
      <Box mb="8">
        <Text fontSize="2xl" fontWeight="semibold">
          Flotilla de Vehículos
        </Text>
        <Text color="gray">Aquí podrás ver todos los vehículos que tienes registrados en la plataforma.</Text>
      </Box>
      <Tabs colorScheme="primary">
        <TabList>
          {tabbarItems.map(({ label, value }) => (
            <Tab key={value}>
              <Text fontWeight="medium">{label}</Text>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabbarItems.map(({ Tab, value }) => (
            <TabPanel key={value}>
              <Tab />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

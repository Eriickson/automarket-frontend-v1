"use client";
import React from "react";

import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

export const ListingsSession = () => {
  return (
    <Box overflow="auto">
      <Tabs colorScheme="primary" variant="enclosed-colored">
        <TabList>
          <Tab>
            <HStack>
              <Text fontSize="sm" minW="max-content">
                Comodidades (24)
              </Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Text fontSize="sm" minW="max-content">
                Interior
              </Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Text fontSize="sm" minW="max-content">
                Sistemas de Seguridad
              </Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Text fontSize="sm" minW="max-content">
                Tecnologías
              </Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Text fontSize="sm" minW="max-content">
                Estilo y Diseño exterior
              </Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Text fontSize="sm" minW="max-content">
                Conducción
              </Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Text fontSize="sm" minW="max-content">
                Extras y Añadidos
              </Text>
            </HStack>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

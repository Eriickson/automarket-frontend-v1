"use client";
import React from "react";

import {
  Box,
  HStack,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const ListingsSession = () => {
  return (
    <Box overflow="auto">
      <Tabs colorScheme="primary" size="sm" variant="enclosed-colored">
        <TabList>
          <Tab px="2.5">
            <HStack>
              <Text fontSize="sm" fontWeight="medium" minW="max-content">
                Comodidades (24)
              </Text>
            </HStack>
          </Tab>
          <Tab px="2.5">
            <HStack>
              <Text fontSize="sm" fontWeight="medium" minW="max-content">
                Equipamiento Interior
              </Text>
            </HStack>
          </Tab>
          <Tab px="2.5">
            <HStack>
              <Text fontSize="sm" fontWeight="medium" minW="max-content">
                Sistemas de Seguridad
              </Text>
            </HStack>
          </Tab>
          <Tab px="2.5">
            <HStack>
              <Text fontSize="sm" fontWeight="medium" minW="max-content">
                Tecnologías
              </Text>
            </HStack>
          </Tab>
          <Tab px="2.5">
            <HStack>
              <Text fontSize="sm" fontWeight="medium" minW="max-content">
                Estilo y Diseño exterior
              </Text>
            </HStack>
          </Tab>
          <Tab px="2.5">
            <HStack>
              <Text fontSize="sm" fontWeight="medium" minW="max-content">
                Conducción
              </Text>
            </HStack>
          </Tab>
          <Tab px="2.5">
            <HStack>
              <Text fontSize="sm" fontWeight="medium" minW="max-content">
                Extras y Añadidos
              </Text>
            </HStack>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UnorderedList>
              <ListItem>
                <Text fontSize="sm" fontWeight="medium">
                  Aire acondicionado
                </Text>
              </ListItem>
            </UnorderedList>
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

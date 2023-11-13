import React, { useState } from "react";

import { Avatar, Box, IconButton, Tag, VStack } from "@chakra-ui/react";

import { Home, Settings, Square, Zap } from "react-feather";

import { SidebarItem, SidebarSection } from "./SidebarItem";

export const Sidebar = () => {
  const [sections] = useState<SidebarSection[]>([
    { title: "Inicio", Icon: Home, pathname: "/" },
    { title: "Publicaciones", Icon: Home, pathname: "/publications" },
    { title: "Sucursales", Icon: Home, pathname: "/branch-offices" },
    { title: "Ajustes", Icon: Settings, pathname: "/settings" },
  ]);

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="0" borderY="0" h="full" overflow="auto" p="2" pb="4">
      <Box h="full">
        <VStack h="full" justifyContent="space-between">
          <VStack spacing="6">
            <Box bgColor="primary.500" borderRadius="md" color="white" p="4">
              <Zap />
            </Box>
            <VStack>
              {sections.map((section) => (
                <SidebarItem key={section.pathname} section={section} />
              ))}
            </VStack>
          </VStack>
          <VStack>
            <Box position="relative">
              <IconButton aria-label="icon" variant="ghost">
                <Square />
              </IconButton>
              <Tag colorScheme="primary" pos="absolute" right="-1" top="-1" variant="solid">
                2
              </Tag>
            </Box>
            <Avatar rounded="md" />
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

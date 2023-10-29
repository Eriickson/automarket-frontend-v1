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
    <Box h="full" overflow="auto" p="2" pb="4" borderRight="1px" borderColor="gray.200">
      <Box h="full">
        <VStack justifyContent="space-between" h="full">
          <VStack spacing="6">
            <Box bgColor="purple.500" p="4" color="white" borderRadius="md">
              <Zap />
            </Box>
            <VStack>
              {sections.map((section) => (
                <SidebarItem section={section} key={section.pathname} />
              ))}
            </VStack>
          </VStack>
          <VStack>
            <Box position="relative">
              <IconButton aria-label="icon" variant="ghost">
                <Square />
              </IconButton>
              <Tag top="-1" right="-1" colorScheme="purple" variant="solid" pos="absolute">
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

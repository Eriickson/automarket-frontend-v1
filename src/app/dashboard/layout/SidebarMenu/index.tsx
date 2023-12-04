"use client";

import React, { FC, Fragment } from "react";

import { useRouter } from "next/navigation";

import {
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  List,
  ListItem,
  Progress,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

import { Cloud, Icon, MoreVertical, Search } from "react-feather";

type SidebarMenuSectionItem = {
  label: string;
  Icon: Icon;
  count: number;
  pathname: string;
  isNew?: boolean;
};

type SidebarMenuSection = {
  title: string;
  items: SidebarMenuSectionItem[];
};

interface SidebarMenuProps {
  title: string;
  sections: SidebarMenuSection[];
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ title, sections }) => {
  const { replace } = useRouter();

  return (
    <Stack border="1px" borderColor="gray.200" borderRadius="0" borderY="0" overflow="auto" pb="4" spacing="4">
      <Box pt="4" px="2">
        <HStack justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold" ml="4">
            {title}
          </Text>
          <HStack spacing="1">
            <IconButton
              aria-label="Edit"
              colorScheme="primary"
              icon={<Search size="1.25rem" />}
              size="sm"
              variant="ghost"
            />
            <IconButton
              aria-label="Edit"
              colorScheme="primary"
              icon={<MoreVertical size="1.25rem" />}
              size="sm"
              variant="ghost"
            />
          </HStack>
        </HStack>
      </Box>
      <Divider borderColor="gray.200" />
      {sections.map((section, index) => (
        <Fragment key={section.title}>
          {index !== 0 ? <Divider borderColor="gray.200" /> : null}
          <Box px="2">
            <Text color="gray.500" fontSize="sm" fontWeight="semibold" mb="2" px="4">
              {section.title}
            </Text>
            <List>
              <Stack spacing="1">
                {section.items.map(({ Icon, label, count, pathname, isNew }, index) => (
                  <ListItem
                    _hover={{
                      color: "primary.500",
                      backgroundColor: "#f4f4f6",
                    }}
                    backgroundColor={index === 4 ? "#f4f4f6" : ""}
                    color={index === 4 ? "primary.500" : ""}
                    cursor="pointer"
                    key={label}
                    px="4"
                    py="2"
                    rounded="lg"
                    transition="all 0.15s"
                    w="96"
                    onClick={() => replace(`/dashboard${pathname}`)}
                  >
                    <HStack justifyContent="space-between">
                      <HStack>
                        <Icon size="1.25rem" strokeWidth="2" />
                        <Text fontWeight="medium">{label}</Text>
                        {isNew ? (
                          <HStack>
                            <Badge colorScheme="primary" variant="solid">
                              Nuevo
                            </Badge>
                          </HStack>
                        ) : null}
                      </HStack>
                      {count > 0 ? <Tag fontWeight="semibold">{count}</Tag> : null}
                    </HStack>
                  </ListItem>
                ))}
              </Stack>
            </List>
          </Box>
        </Fragment>
      ))}
      <Box flex="1" />
      <Box px="4">
        <Box borderColor="gray.300" borderWidth="1px" px="3" py="3" rounded="xl">
          <HStack justifyContent="space-between" mb="4">
            <HStack>
              <Box color="primary.500">
                <Cloud strokeWidth="2.5" />
              </Box>
              <Text fontWeight="semibold">Storage</Text>
            </HStack>
            <Button borderColor="gray.400" borderWidth="1px" variant="outline">
              Update
            </Button>
          </HStack>
          <Progress colorScheme="primary" h="2.5" mb="2" rounded="full" value={90} />
          <Text color="gray.800" fontSize="sm" fontWeight="semibold">
            25.5 GB of 28 GB used
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

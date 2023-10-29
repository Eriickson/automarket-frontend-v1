"use client";

import React, { FC, Fragment } from "react";

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

import { MoreVertical, Search, Cloud, Icon } from "react-feather";
import { useRouter } from "next/navigation";

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
    <Stack spacing="4" pb="4" borderRight="1px" overflow="auto" borderColor="gray.200">
      <Box pt="4" px="2">
        <HStack justifyContent="space-between">
          <Text ml="4" fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <HStack spacing="1">
            <IconButton
              colorScheme="purple"
              size="sm"
              aria-label="Edit"
              icon={<Search size="1.25rem" />}
              variant="ghost"
            />
            <IconButton
              colorScheme="purple"
              size="sm"
              aria-label="Edit"
              icon={<MoreVertical size="1.25rem" />}
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
            <Text px="4" mb="2" fontSize="sm" fontWeight="semibold" color="gray.500">
              {section.title}
            </Text>
            <List>
              <Stack spacing="1">
                {section.items.map(({ Icon, label, count, pathname, isNew }, index) => (
                  <ListItem
                    key={label}
                    px="4"
                    py="2"
                    rounded="lg"
                    transition="all 0.15s"
                    cursor="pointer"
                    color={index === 4 ? "#642ec0" : ""}
                    backgroundColor={index === 4 ? "#f4f4f6" : ""}
                    _hover={{
                      color: "#642ec0",
                      backgroundColor: "#f4f4f6",
                    }}
                    w="96"
                    onClick={() => replace(`/dashboard${pathname}`)}
                  >
                    <HStack justifyContent="space-between">
                      <HStack>
                        <Icon size="1.25rem" strokeWidth="2" />
                        <Text fontWeight="medium">{label}</Text>
                        {isNew ? (
                          <Badge colorScheme="purple" variant="solid">
                            new
                          </Badge>
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
              <Box color="purple.500">
                <Cloud strokeWidth="2.5" />
              </Box>
              <Text fontWeight="semibold">Storage</Text>
            </HStack>
            <Button variant="outline" borderWidth="1px" borderColor="gray.400">
              Update
            </Button>
          </HStack>
          <Progress colorScheme="purple" value={90} h="2.5" rounded="full" mb="2" />
          <Text fontSize="sm" fontWeight="semibold" color="gray.800">
            25.5 GB of 28 GB used
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

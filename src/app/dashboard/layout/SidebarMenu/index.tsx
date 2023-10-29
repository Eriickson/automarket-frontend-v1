"use client";

import React, { useState } from "react";

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

import {
  Anchor,
  ArrowLeft,
  Code,
  CreditCard,
  Database,
  AlertOctagon,
  Key,
  Settings,
  Shield,
  User,
  Users,
  MoreVertical,
  Search,
  Cloud,
} from "react-feather";
import { useRouter } from "next/navigation";

export const SidebarMenu = () => {
  const [companyItems] = useState([
    { label: "General", Icon: Settings, count: 0, url: "/general" },
    { label: "Members", Icon: User, count: 16, url: "/" },
    { label: "Teams", Icon: Users, count: 10, url: "/" },
    { label: "Custom fields", Icon: Database, count: 0, url: "/" },
    { label: "Plans & billing", Icon: CreditCard, count: 0, url: "/" },
    { label: "Security", Icon: Shield, count: 0, url: "/" },
    { label: "Integrations", Icon: Anchor, count: 0, url: "/integrations" },
  ]);

  const [accountItems] = useState([
    { label: "Profile", Icon: User, count: 0, url: "/settings/account/profile" },
    { label: "Password", Icon: Key, count: 0, url: "/" },
  ]);

  const [advancedItems] = useState([
    { label: "APIs", Icon: Code, count: 0, url: "/" },
    { label: "Danger zone", Icon: AlertOctagon, count: 0, url: "/" },
  ]);

  const { replace } = useRouter();

  return (
    <Stack spacing="4" pb="4" borderRight="1px" overflow="auto" borderColor="gray.200">
      <Box pt="4" px="2">
        <HStack justifyContent="space-between">
          <Button size="sm" colorScheme="purple" pl="2" leftIcon={<ArrowLeft size="1.25rem" />} variant="ghost">
            Settings
          </Button>
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
      <Box px="2">
        <Text px="4" mb="2" fontSize="sm" fontWeight="semibold" color="gray.500">
          Company
        </Text>
        <List>
          <Stack spacing="1">
            {companyItems.map(({ Icon, label, count, url }, index) => (
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
                onClick={() => replace(`/settings${url}`)}
              >
                <HStack justifyContent="space-between">
                  <HStack>
                    <Icon size="1.25rem" strokeWidth="2" />
                    <Text fontWeight="medium">{label}</Text>
                    {index === 2 ? (
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
      <Divider borderColor="gray.200" />
      <Box px="2">
        <Text px="4" mb="2" fontSize="sm" fontWeight="semibold" color="gray.500">
          Account
        </Text>
        <List>
          <Stack spacing="1">
            {accountItems.map(({ Icon, label, count, url }, index) => (
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
                onClick={() => replace(url)}
              >
                <HStack justifyContent="space-between">
                  <HStack>
                    <Icon size="1.25rem" strokeWidth="2" />
                    <Text fontWeight="medium">{label}</Text>
                  </HStack>
                  {count > 0 ? <Tag fontWeight="semibold">{count}</Tag> : null}
                </HStack>
              </ListItem>
            ))}
          </Stack>
        </List>
      </Box>
      <Divider borderColor="gray.200" />
      <Box px="2">
        <Text px="4" mb="2" fontSize="sm" fontWeight="semibold" color="gray.500">
          Advanced
        </Text>
        <List>
          <Stack spacing="1">
            {advancedItems.map(({ Icon, label, count }, index) => (
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
              >
                <HStack justifyContent="space-between">
                  <HStack>
                    <Icon size="1.25rem" strokeWidth="2" />
                    <Text fontWeight="medium">{label}</Text>
                  </HStack>
                  {count > 0 ? <Tag fontWeight="semibold">{count}</Tag> : null}
                </HStack>
              </ListItem>
            ))}
          </Stack>
        </List>
      </Box>
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

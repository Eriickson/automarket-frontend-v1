import React from "react";

import { headers } from "next/headers";
import Link from "next/link";

import { Box, HStack, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

const tabsItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    TabPanel: () => <Box>Location</Box>,
  },
  {
    label: "Publicaciones",
    href: "/dashboard/publications",
    TabPanel: () => <Box>Location</Box>,
  },
  {
    label: "Flotilla",
    href: "/dashboard/fleet",
    TabPanel: () => <Box>Location</Box>,
  },
  {
    label: "Perfil Empresarial",
    href: "/dashboard/profile/settings",
    TabPanel: () => <Box>Location</Box>,
  },

  {
    label: "Configuración",
    href: "/dashboard/settings",
    TabPanel: () => <Box>Location</Box>,
  },
];

export const TabbarNavigation = () => {
  const pathname = headers().get("x-pathname");

  const tabActive = tabsItems.findIndex((item) => item.href === pathname);

  console.log(tabActive);

  return (
    <Tabs colorScheme="primary" defaultIndex={tabActive} variant="enclosed-colored">
      <Box overflow="auto" pb="1" w="full">
        <TabList>
          {tabsItems.map((item) => (
            <Link passHref href={item.href} key={item.href} replace={true} scroll={false} shallow={true}>
              <Tab key={item.href} px="2" py="1.5">
                <HStack>
                  <Text fontSize="xs" fontWeight="semibold" minW="max-content">
                    {item.label}
                  </Text>
                </HStack>
              </Tab>
            </Link>
          ))}
        </TabList>
      </Box>
    </Tabs>
  );
};

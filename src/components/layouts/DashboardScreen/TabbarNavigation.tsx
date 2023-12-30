"use client";
import React, { useEffect, useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Box, HStack, Tab, TabList, Tabs, Text, UseTabListProps } from "@chakra-ui/react";

const tabsItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Publicaciones", href: "/dashboard/publications" },
  { label: "Flotilla de Vehículos", href: "/dashboard/fleet" },
  { label: "Perfil Empresarial", href: "/dashboard/profile/settings" },
  { label: "Configuración", href: "/dashboard/settings" },
];

export const TabbarNavigation = () => {
  const pathname = usePathname();
  const tabActive = tabsItems.findIndex((item) => item.href === pathname);
  const tabListRef = useRef<UseTabListProps>(null);

  useEffect(() => {
    if (tabListRef.current && tabActive !== -1) {
      const activeTabElement = ((tabListRef.current?.children as HTMLElement[]) || [])[tabActive];

      activeTabElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [tabActive]);

  return (
    <Tabs colorScheme="primary" defaultIndex={tabActive} variant="enclosed-colored">
      <Box overflow="auto" pb="1" w="full">
        <TabList ref={tabListRef}>
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

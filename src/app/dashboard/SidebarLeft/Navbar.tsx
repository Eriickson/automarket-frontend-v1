"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";

import { HStack, List, ListItem, Text } from "@chakra-ui/react";

import { BookOpen, Home, Image as FeatherImage, Settings, User } from "react-feather";

const navbarItems = [
  {
    Icon: Home,
    label: "Inicio",
    pathname: "/dashboard",
  },
  {
    Icon: BookOpen,
    label: "Publicaciones",
    pathname: "/",
  },
  {
    Icon: FeatherImage,
    label: "Perfil Empresarial",
    pathname: "/",
  },
  {
    Icon: FeatherImage,
    label: "Perfil Personal",
    pathname: "/",
  },
  {
    Icon: User,
    label: "Almacen",
    pathname: "/",
  },
  {
    Icon: Settings,
    label: "Configuración",
    pathname: "/",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <List flex="1" spacing="2">
      {navbarItems.map((item) => (
        <ListItem
          bgColor={pathname === item.pathname ? "primary.500" : "white"}
          color={pathname === item.pathname ? "white" : "black"}
          fontWeight="semibold"
          key={item.label}
          px="3"
          py="3"
          rounded="sm"
        >
          <HStack>
            <item.Icon />
            <Text>{item.label}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

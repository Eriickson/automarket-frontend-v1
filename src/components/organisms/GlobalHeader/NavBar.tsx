import React from "react";

import { HStack } from "@chakra-ui/react";

import { NavbarItem } from "./NavbarItem";

const navbarItems = [
  { label: "Buscar Publicaciones", href: "/searcher/publications" },
  { label: "Encontrar Distribuidores", href: "/searcher/agencies" },
  { label: "Explorar", href: "/explore-and-discover" },
  { label: "Planes y Precios", href: "/plans-and-pricing" },
  { label: "Dashboard", href: "/dashboard" },
];

export const GlobalHeaderNavBar = () => {
  return (
    <HStack>
      {navbarItems.map((item, i) => (
        <NavbarItem item={item} key={i} />
      ))}
    </HStack>
  );
};

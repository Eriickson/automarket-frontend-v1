import React from "react";

import { Box, HStack } from "@chakra-ui/react";

import { NavbarItem } from "./NavbarItem";

const navbarItems = [
  { label: "Buscar Publicaciones", href: "/search" },
  { label: "Encontrar Distribuidores", href: "/search/dealers" },
  // TODO:: Activate Explorer page
  // { label: "Explorar", href: "/explore-and-discover" },
  { label: "Planes y Precios", href: "/plans-and-pricing" },
  { label: "Dashboard", href: "/dashboard" },
];

export const GlobalHeaderNavBar = () => {
  return (
    <Box display={["none", null, null, null, "block"]}>
      <HStack>
        {navbarItems.map((item, i) => (
          <NavbarItem item={item} key={i} />
        ))}
      </HStack>
    </Box>
  );
};

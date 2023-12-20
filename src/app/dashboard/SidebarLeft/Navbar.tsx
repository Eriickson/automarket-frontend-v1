"use client";

import React from "react";

import { List } from "@chakra-ui/react";

import { BookOpen, Home, Image as FeatherImage, Settings, User } from "react-feather";

import { NavbarItem } from "./NavbarItem";

const navbarItems = [
  { Icon: Home, label: "Tablero Principal", pathname: "/dashboard" },
  { Icon: BookOpen, label: "Publicaciones", pathname: "/dashboard/publications" },
  { Icon: User, label: "Flotilla Vehícular", pathname: "/dashboard/vehicle-fleet" },
  { Icon: FeatherImage, label: "Perfil Empresarial", pathname: "/dashboard/dealer/profile" },
  { Icon: FeatherImage, label: "Perfil Personal", pathname: "/dashboard/profile" },
  { Icon: Settings, label: "Configuración", pathname: "/dashboard/settings" },
];

export const Navbar = () => {
  return (
    <List flex="1" spacing="2">
      {navbarItems.map((item) => {
        return <NavbarItem item={item} key={item.label} />;
      })}
    </List>
  );
};

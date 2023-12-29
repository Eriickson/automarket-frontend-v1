import React from "react";

import { FooterList } from "./FooterList";

const items = [
  { label: "Características", href: "/" },
  { label: "Servicio al Cliente", href: "/legal/support" },
  { label: "Planes y Precios", href: "/plans-and-pricing" },
  { label: "Ayuda", href: "/overview/help" },
];

export const OverviewMenu = () => {
  return <FooterList items={items} title=" Descripción general" />;
};

import React from "react";

import { FooterList } from "./FooterList";

const items = [
  { label: "Políticas de Privacidad", href: "/privacy-policies" },
  { label: "Términos y Condiciones", href: "/terms-and-conditions" },
];

export const RightSession = () => {
  return <FooterList items={items} title="Apartado Legal" />;
};

"use client";

import React from "react";

import { SidebarMenu } from "../layout/SidebarMenu";

import { Content } from "../layout/Content";
import { Search } from "react-feather";

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarMenu
        title="Publicaciones"
        sections={[
          {
            title: "General",
            items: [
              { label: "Publicadas", Icon: Search, count: 35, pathname: "/publications/published" },
              { label: "Borradores", Icon: Search, count: 14, pathname: "/publications/drafts" },
              { label: "Archivadas", Icon: Search, count: 156, pathname: "/publications/archived" },
            ],
          },
        ]}
      />
      <Content>{children}</Content>
    </>
  );
}

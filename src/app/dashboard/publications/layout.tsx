"use client";

import React from "react";

import { Box } from "@chakra-ui/react";

import { Search } from "react-feather";

import { SidebarMenu } from "../layout/SidebarMenu";

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarMenu
        sections={[
          {
            title: "General",
            items: [
              { isNew: true, label: "Publicadas", Icon: Search, count: 35, pathname: "/publications/published" },
              { label: "Borradores", Icon: Search, count: 14, pathname: "/publications/drafts" },
              { label: "Archivadas", Icon: Search, count: 156, pathname: "/publications/archived" },
            ],
          },
        ]}
        title="Publicaciones"
      />
      <Box>{children}</Box>
    </>
  );
}

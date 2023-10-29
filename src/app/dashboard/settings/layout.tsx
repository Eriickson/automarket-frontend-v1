import React from "react";

import { SidebarMenu } from "../layout/SidebarMenu";

import { Content } from "../layout/Content";

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarMenu />
      <Content>{children}</Content>
    </>
  );
}

"use client";

import React from "react";

import { SidebarMenu } from "../layout/SidebarMenu";

import { Content } from "../layout/Content";
import {
  AlertOctagon,
  Anchor,
  Code,
  CreditCard,
  Database,
  Key,
  Settings,
  Shield,
  User,
  Users,
  Monitor,
  Bell,
} from "react-feather";

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarMenu
        title="Ajustes"
        sections={[
          {
            title: "General",
            items: [
              { label: "General", Icon: Settings, count: 0, pathname: "/general" },
              { label: "Members", Icon: User, count: 16, pathname: "/" },
              { label: "Teams", Icon: Users, count: 10, pathname: "/" },
              { label: "Custom fields", Icon: Database, count: 0, pathname: "/" },
              { label: "Plans & billing", Icon: CreditCard, count: 0, pathname: "/" },
              { label: "Security", Icon: Shield, count: 0, pathname: "/" },
              { label: "Notificaciones", Icon: Bell, count: 0, pathname: "/notifications" },
            ],
          },
          {
            title: "Account",
            items: [
              { label: "Profile", Icon: User, count: 0, pathname: "/settings/account/profile" },
              { label: "Password", Icon: Key, count: 0, pathname: "/" },
              { label: "Dispositivos enlazados", Icon: Monitor, count: 0, pathname: "/" },
            ],
          },
          {
            title: "Advanced",
            items: [
              { label: "APIs", Icon: Code, count: 0, pathname: "/" },
              { label: "Danger zone", Icon: AlertOctagon, count: 0, pathname: "/" },
            ],
          },
        ]}
      />
      <Content>{children}</Content>
    </>
  );
}

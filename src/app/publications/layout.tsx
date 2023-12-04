import React, { FC } from "react";

import { DashboardScreenLayout } from "@/components/layouts/DashboardScreen";

interface PublicationsLayoutProps {
  children: React.ReactNode;
}

const PublicationsLayout: FC<PublicationsLayoutProps> = ({ children }) => {
  return <DashboardScreenLayout>{children}</DashboardScreenLayout>;
};

export default PublicationsLayout;

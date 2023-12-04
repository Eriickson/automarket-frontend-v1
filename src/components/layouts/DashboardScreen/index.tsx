import React, { FC } from "react";

interface DashboardScreenLayoutProps {
  children: React.ReactNode;
}

export const DashboardScreenLayout: FC<DashboardScreenLayoutProps> = ({ children }) => {
  return <div>DashboardScreenLayout{children}</div>;
};

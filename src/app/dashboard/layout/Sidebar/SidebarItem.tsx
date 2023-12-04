import React, { FC } from "react";

import { usePathname } from "next/navigation";

import { IconButton, Tooltip } from "@chakra-ui/react";

import { Icon } from "react-feather";

import { Link } from "@chakra-ui/next-js";

export type SidebarSection = {
  title: string;
  Icon: Icon;
  pathname: string;
};

interface SidebarItemProps {
  section: SidebarSection;
}

export const SidebarItem: FC<SidebarItemProps> = ({ section }) => {
  const pathname = usePathname();

  return (
    <Tooltip hasArrow closeDelay={100} label={section.title} mb="2" ml="1" openDelay={100} placement="right-end">
      <Link href={`/dashboard${section.pathname}`}>
        <IconButton
          aria-label="icon"
          colorScheme="purple"
          variant={pathname === `/dashboard${section.pathname}` ? "solid" : "ghost"}
        >
          <section.Icon />
        </IconButton>
      </Link>
    </Tooltip>
  );
};

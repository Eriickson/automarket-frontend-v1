import React, { FC } from "react";

import { IconButton, Tooltip } from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

import { Icon } from "react-feather";
import { usePathname } from "next/navigation";

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
    <Tooltip mb="2" ml="1" hasArrow openDelay={100} closeDelay={100} label={section.title} placement="right-end">
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

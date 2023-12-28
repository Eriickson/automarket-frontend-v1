import React, { FC } from "react";

import { GridItem, SimpleGrid } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

interface SessionWapperProps {
  children: React.ReactNode;
}

export const SessionWapper: FC<SessionWapperProps> = ({ children }) => {
  return (
    <ScreenAreaDelimiter>
      <SimpleGrid columns={12}>
        <GridItem colSpan={[0, null, null, null, null, 1]} />
        <GridItem colSpan={[12, null, null, null, null, 10]}>{children}</GridItem>
        <GridItem colSpan={[0, null, null, null, null, 1]} />
      </SimpleGrid>
    </ScreenAreaDelimiter>
  );
};

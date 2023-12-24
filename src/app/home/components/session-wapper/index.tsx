import React, { FC } from "react";

import { Box, Center, GridItem, SimpleGrid } from "@chakra-ui/react";

interface SessionWapperProps {
  children: React.ReactNode;
}

export const SessionWapper: FC<SessionWapperProps> = ({ children }) => {
  return (
    <Center>
      <Box maxW="1920" w="full">
        <SimpleGrid columns={12}>
          <GridItem colSpan={1} />
          <GridItem colSpan={10}>{children}</GridItem>
          <GridItem colSpan={1} />
        </SimpleGrid>
      </Box>
    </Center>
  );
};

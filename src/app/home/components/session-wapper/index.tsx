import React, { FC } from "react";

import { Box, Center, GridItem, SimpleGrid } from "@chakra-ui/react";

interface SessionWapperProps {
  children: React.ReactNode;
}

export const SessionWapper: FC<SessionWapperProps> = ({ children }) => {
  return (
    <Center>
      <Box maxW="1920" w="full">
        <Box px={["2", null, null, "12"]}>
          <SimpleGrid columns={12}>
            <GridItem colSpan={[0, null, null, null, null, 1]} />
            <GridItem colSpan={[12, null, null, null, null, 10]}>{children}</GridItem>
            <GridItem colSpan={[0, null, null, null, null, 1]} />
          </SimpleGrid>
        </Box>
      </Box>
    </Center>
  );
};

"use client";

import React, { FC, useEffect } from "react";

import { Box, Center, Flex, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";

interface FullScreenFormLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const FullScreenFormLayout: FC<FullScreenFormLayoutProps> = ({ children, title }) => {
  return (
    <Box h="100vh">
      <SimpleGrid h="full" columns={12}>
        <GridItem h="full" colSpan={5}>
          <Stack spacing="6" h="full" p="12">
            <Box h="32">
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text fontWeight="semibold" fontSize="3xl">
                    {title}
                  </Text>
                </Box>
                <Text color="#165ef0" fontWeight="semibold" decoration="underline">
                  Ingresa a tu cuenta
                </Text>
              </Flex>
            </Box>
            <Center flex="1">
              <Box w="full">
                <Box className="children">{children}</Box>
              </Box>
            </Center>
            <Box h="32" />
          </Stack>
        </GridItem>
        <GridItem bgColor="#f3f4f6" colSpan={7}></GridItem>
      </SimpleGrid>
    </Box>
  );
};

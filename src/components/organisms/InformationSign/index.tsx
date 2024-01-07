"use client";

import React, { FC } from "react";

import Link from "next/link";

import { Box, Flex, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

interface InformationSignProps {
  title: string;
  description: string;
}

export const InformationSign: FC<InformationSignProps> = ({ description, title }) => {
  return (
    <Box bgColor="secondary.500" borderRadius={["md", null, null, "2xl"]} p={["3.5", null, null, "14"]}>
      <Flex alignItems={["flex-start", null, null, "center"]} flexDir={["column", null, null, "row"]}>
        <Box flex={1} mb={["4", null, null, "0"]}>
          <Box color="white">
            <Text fontSize={["lg", null, null, "2xl"]} fontWeight="semibold">
              {title}
            </Text>
            <Text color="secondary.100" fontSize={["xs", null, null, "md"]} maxW="xl">
              {description}
            </Text>
          </Box>
        </Box>
        <Flex flex={1} justifyContent="flex-end">
          <Link href="/create-an-account">
            <Button colorScheme="primary" fontSize={["xs", null, null, "md"]} size={["sm", null, null, "md"]}>
              Crea tu cuenta
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

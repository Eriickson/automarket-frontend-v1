import React from "react";

import Link from "next/link";

import { Box, Flex, Text } from "@chakra-ui/react";

import { Button } from "../components/atoms/Button";

export const JoinOurPlatform = () => {
  return (
    <Box bgColor="secondary.500" borderRadius={["md", null, null, "2xl"]} p={["3.5", null, null, "14"]}>
      <Flex alignItems={["flex-start", null, null, "center"]} flexDir={["column", null, null, "row"]}>
        <Box flex={1} mb={["4", null, null, "0"]}>
          <Box color="white">
            <Text fontSize={["lg", null, null, "2xl"]} fontWeight="semibold">
              Ven y forma parte de nuetra plataforma
            </Text>
            <Text color="secondary.100" fontSize={["xs", null, null, "md"]} maxW="xl">
              Únete a nuestra plataforma y empieza a disfrutar de todos los beneficios que tenemos para ti.
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

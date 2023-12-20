import React from "react";

import Link from "next/link";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const JoinOurPlatform = () => {
  return (
    <Box mx="auto" py="14" w="1600px">
      <Box bgColor="secondary.500" borderRadius="2xl" px={["8", null, "14"]} py={["10", null, "14"]}>
        <Flex alignItems={["flex-start", null, null, "center"]} flexDir={["column", null, null, "row"]}>
          <Box flex={1} mb={["8", null, null, 0]}>
            <Box color="white">
              <Text fontSize={["2xl", null, "2xl"]} fontWeight="semibold">
                Ven y forma parte de nuetra plataforma
              </Text>
              <Text color="secondary.100" fontSize={["md", null, null, "md"]} maxW="xl">
                Únete a nuestra plataforma y empieza a disfrutar de todos los beneficios que tenemos para ti.
              </Text>
            </Box>
          </Box>
          <Flex flex={1} justifyContent="flex-end">
            <Link href="/create-an-account">
              <Button colorScheme="primary" px="4" py="6">
                Crea tu cuenta
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

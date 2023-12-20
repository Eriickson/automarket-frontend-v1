"use client";
import React from "react";

import { Box, Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms";

import { Copy } from "react-feather";

const DealerProfilePage = () => {
  return (
    <Box>
      <Stack>
        <HStack>
          <Box bgColor="primary.500" h="20" rounded="full" w="20" />
          <Box>
            <Text fontSize="xl" fontWeight="semibold">
              Erickson Auto Import
            </Text>
            <HStack>
              <Text color="gray.500" fontSize="sm" fontWeight="medium">
                atmk.me/espaillat-motors
              </Text>
              <IconButton aria-label="" size="xs" variant="ghost">
                <Copy size="1rem" />
              </IconButton>
            </HStack>
          </Box>
        </HStack>

        <Flex>
          <Box w="80">
            <Text as="b">Nombre de tu distribuidor</Text>
            <Text fontSize="sm">Con este nombre aparecerás en la plataforma.</Text>
          </Box>
          <Box flex="1">
            <SimpleTextField />
          </Box>
          <Box flex="2"></Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default DealerProfilePage;

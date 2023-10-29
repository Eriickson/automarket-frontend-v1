import React from "react";

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  IconButton,
  HStack,
  Text,
  Avatar,
  Stack,
  Tag,
  Checkbox,
} from "@chakra-ui/react";
import { MoreVertical } from "react-feather";

export const Table = () => {
  return (
    <Box border="1px" borderRadius="md" borderColor="gray.300">
      <TableContainer>
        <ChakraTable size="sm">
          <Thead>
            <Tr>
              <Th py="4"></Th>
              <Th py="4">Información</Th>
              <Th py="4">Año</Th>
              <Th py="4">Precio</Th>
              <Th py="4">Sucursal</Th>
              <Th py="4">Visitas</Th>
              <Th py="4">Estado</Th>
              <Th py="4"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((item) => (
              <Tr key={item}>
                <Td w="0">
                  <Checkbox size="lg" />
                </Td>
                <Td>
                  <HStack spacing="3">
                    <Avatar />
                    <Stack spacing="1">
                      <Text fontSize="md" fontWeight="medium">
                        Toyota Corolla
                      </Text>
                      <Text>#0000001</Text>
                    </Stack>
                  </HStack>
                </Td>
                <Td>2023</Td>
                <Td>USD$ 25,000.00</Td>
                <Td>Santo Domingo</Td>
                <Td>25,000</Td>
                <Td>
                  <Tag colorScheme="orange">Archivada</Tag>
                </Td>
                <Td w="0">
                  <IconButton size="sm" variant="ghost" aria-label="options">
                    <MoreVertical size="1.25rem" />
                  </IconButton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box>
  );
};

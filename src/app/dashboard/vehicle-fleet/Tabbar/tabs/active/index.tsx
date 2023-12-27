import React from "react";

import {
  AspectRatio,
  Box,
  IconButton,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { MoreVertical } from "react-feather";

export const ActiveTab = () => {
  return (
    <Box>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Marca</Th>
              <Th>Modelo</Th>
              <Th>Trim Level</Th>
              <Th>Año</Th>
              <Th>Precio</Th>
              <Th>Fecha de Públicación</Th>
              <Th>Estatus</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Tr key={item} py="2">
                <Td pl="0" w="0">
                  <Box overflow="hidden" rounded="full" w="14">
                    <AspectRatio ratio={1 / 1}>
                      <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab.jpg?crop=0.670xw:1.00xh;0.136xw,0&resize=1200:*" />
                    </AspectRatio>
                  </Box>
                </Td>
                <Td>
                  <b>Honda</b>
                </Td>
                <Td>
                  <b>Civic</b>
                </Td>
                <Td>
                  <b>EX</b>
                </Td>
                <Td>
                  <b>2016</b>
                </Td>
                <Td>
                  <b>US 45,000</b>
                </Td>
                <Td>
                  <b>12 de Feb. de 2023</b>
                </Td>
                <Td>
                  <Tag colorScheme="green" rounded="sm" variant="solid">
                    <b>Activo</b>
                  </Tag>
                </Td>{" "}
                <Td pr="0" w="0">
                  <IconButton aria-label="" size="sm" variant="ghost">
                    <MoreVertical size="1rem" strokeWidth="3" />
                  </IconButton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

import React from "react";

import { Checkbox, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

import { ProfileSession } from "./ProfileSession";

export const ScheduleSession = () => {
  return (
    <ProfileSession
      subtitle="Agrega tu horario de atención para que tus clientes puedan visitarte."
      title="Horario de atención"
    >
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Día de la semana</Th>
              <Th>Hora de Apertura</Th>
              <Th>Hora de Cierre</Th>
              <Th>Abierto</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Lunes</Td>
              <Td textAlign="center">09:00</Td>
              <Td textAlign="center">07:00</Td>{" "}
              <Td textAlign="center">
                <Checkbox colorScheme="secondary" />
              </Td>
            </Tr>
            <Tr>
              <Td>Martes</Td>
              <Td textAlign="center">09:00</Td>
              <Td textAlign="center">07:00</Td>{" "}
              <Td textAlign="center">
                <Checkbox colorScheme="secondary" />
              </Td>
            </Tr>
            <Tr>
              <Td>Miércoles</Td>
              <Td textAlign="center">09:00</Td>
              <Td textAlign="center">07:00</Td>{" "}
              <Td textAlign="center">
                <Checkbox colorScheme="secondary" />
              </Td>
            </Tr>

            <Tr>
              <Td>Jueves</Td>
              <Td textAlign="center">09:00</Td>
              <Td textAlign="center">07:00</Td>{" "}
              <Td textAlign="center">
                <Checkbox colorScheme="secondary" />
              </Td>
            </Tr>
            <Tr>
              <Td>Viernes</Td>
              <Td textAlign="center">09:00</Td>
              <Td textAlign="center">07:00</Td>{" "}
              <Td textAlign="center">
                <Checkbox colorScheme="secondary" />
              </Td>
            </Tr>

            <Tr>
              <Td>Sábado</Td>
              <Td textAlign="center">09:00</Td>
              <Td textAlign="center">07:00</Td>{" "}
              <Td textAlign="center">
                <Checkbox colorScheme="secondary" />
              </Td>
            </Tr>

            <Tr>
              <Td>Domingo</Td>
              <Td textAlign="center">09:00</Td>
              <Td textAlign="center">07:00</Td>
              <Td textAlign="center">
                <Checkbox colorScheme="secondary" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </ProfileSession>
  );
};

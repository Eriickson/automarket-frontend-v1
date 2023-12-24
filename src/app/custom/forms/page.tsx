"use client";

import React, { useEffect, useState } from "react";

import { Box, Button, Stack } from "@chakra-ui/react";

import { SimpleTextField } from "@/components/atoms/SimpleTextField";
import { SelectField } from "@/components/organisms";
import { getClientIp } from "@/utils";
import { getDeviceInfo } from "@/utils/getClientDeviceInformation";
import { getIpInfo } from "@/utils/getIpInfo";
// const deviceInfo = await axios.get("https://ipapi.co/json/");

const personListOne = [
  { label: "Robert Sanchez", value: "15" },
  { label: "Sophia Martin", value: "16" },
  { label: "Gabriel Cruz", value: "17" },
  { label: "Patricia Reyes", value: "18" },
  { label: "Anthony Alvarez", value: "19" },
  { label: "Silvia Romero", value: "20" },
  { label: "Fernando Jimenez", value: "21" },
  { label: "Olga Perez", value: "22" },
  { label: "Francisco Torres", value: "23" },
  { label: "Beatriz Lopez", value: "24" },
  { label: "Alberto Rodriguez", value: "25" },
  { label: "Clara Ruiz", value: "26" },
  { label: "Roberto Martinez", value: "27" },
  { label: "Eva Gomez", value: "28" },
  { label: "Hugo Morales", value: "29" },
  { label: "Natalia Castro", value: "30" },
];

const personListTwo = [
  { label: "John Smith", value: "1" },
  { label: "Maria Rodriguez", value: "2" },
  { label: "David Johnson", value: "3" },
  { label: "Ana García", value: "4" },
  { label: "Michael Martinez", value: "5" },
  { label: "Laura Lopez", value: "6" },
  { label: "Christopher Perez", value: "7" },
  { label: "Elena Fernandez", value: "8" },
  { label: "Daniel Ramirez", value: "9" },
  { label: "Isabel González", value: "10" },
  { label: "Andrew Hernandez", value: "11" },
  { label: "Carmen Torres", value: "12" },
  { label: "James Flores", value: "13" },
  { label: "Raquel Diaz", value: "14" },
];

const CustomPage = () => {
  const [persons, setPersons] = useState(personListOne);
  const [personListSelected, setPersonListSelected] = useState("personListOne");

  async function getClientInfo() {
    const { clientIp } = await getClientIp();
    const data = await getIpInfo({ ip: clientIp });
    const dataDeviceInfo = getDeviceInfo();

    console.log(data);
  }

  useEffect(() => {
    getClientInfo();
  }, []);

  return (
    <Box m="24">
      <Stack w="96">
        <SimpleTextField placeholder="Erickson Manuel Holguín" />
        <SelectField allowSearch options={persons} />
        <Button
          rounded="sm"
          onClick={() => {
            if (personListSelected === "personListOne") {
              setPersons(personListTwo);
              setPersonListSelected("personListTwo");
            } else {
              setPersons(personListOne);
              setPersonListSelected("personListOne");
            }
          }}
        >
          Change List ({personListSelected})
        </Button>
      </Stack>
    </Box>
  );
};

export default CustomPage;
"use client";

import React, { useState } from "react";

import { Box, Button, Stack } from "@chakra-ui/react";

import { Option, SelectField } from "@/components/atoms/SelectField";
import { SimpleTextField } from "@/components/atoms/SimpleTextField";

const CustomPage = () => {
  const [value, setValue] = useState<Option[]>([
    { label: "John Smith", value: "1" },
    { label: "Maria Rodriguez", value: "2" },
  ]);

  return (
    <Box m="24">
      <Stack w="96">
        <SimpleTextField placeholder="Erickson Manuel Holguín" />
        <SelectField allowMultiple allowSearch options={personas} />
        <Button
          onClick={() => {
            setValue([]);
          }}
        >
          <Box>Reset</Box>
        </Button>
      </Stack>
    </Box>
  );
};

export default CustomPage;

export const personas: Option[] = [
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

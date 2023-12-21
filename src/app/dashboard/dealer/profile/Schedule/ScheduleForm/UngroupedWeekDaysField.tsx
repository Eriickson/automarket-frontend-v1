import React from "react";

import { Stack } from "@chakra-ui/react";

import { WeekDayField } from "./WeekDayField";

const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export const UngroupedWeekDaysField = () => {
  return (
    <Stack>
      {weekDays.map((day) => (
        <WeekDayField key={day} label={day} />
      ))}
    </Stack>
  );
};

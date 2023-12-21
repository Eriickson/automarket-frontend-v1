import React from "react";

import { Stack } from "@chakra-ui/react";

import { useController } from "react-hook-form";

import { WeekDayField } from "./WeekDayField";

const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export const UngroupedWeekDaysField = () => {
  const { field } = useController({ name: "schedule" });

  return (
    <Stack>
      {weekDays.map((day, index) => {
        return (
          <WeekDayField
            key={day}
            label={day}
            value={field.value.at(index)}
            onChange={(value) => field.onChange(field.value.map((v: any, i: number) => (i === index ? value : v)))}
          />
        );
      })}
    </Stack>
  );
};

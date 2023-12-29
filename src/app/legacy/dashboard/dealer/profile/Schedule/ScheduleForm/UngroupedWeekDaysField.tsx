import React, { useMemo } from "react";

import { Stack } from "@chakra-ui/react";

import { ErrorOption, useController } from "react-hook-form";

import { ScheduleFormValuesType } from "./schema";
import { WeekDayField } from "./WeekDayField";

const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export const UngroupedWeekDaysField = () => {
  const { field, formState } = useController<ScheduleFormValuesType>({ name: "schedule" });

  const errors = useMemo(
    () => ((formState.errors.schedule || []) as ErrorOption[]).map((error) => error.message),
    [formState.errors.schedule]
  );

  return (
    <Stack>
      {weekDays.map((day, index) => {
        return (
          <WeekDayField
            error={errors[index]}
            key={day}
            label={day}
            value={(field.value as ScheduleFormValuesType["schedule"])[index]}
            onChange={(value) => {
              const newValues = (field.value as ScheduleFormValuesType["schedule"]).map((v, i) =>
                i === index ? value : v
              );
              field.onChange(newValues);
            }}
          />
        );
      })}
    </Stack>
  );
};

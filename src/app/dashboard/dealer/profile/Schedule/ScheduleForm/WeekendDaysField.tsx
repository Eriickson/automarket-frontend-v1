import React, { useMemo } from "react";

import { ErrorOption, useController } from "react-hook-form";

import { ScheduleFormValuesType } from "./schema";
import { WeekDayField } from "./WeekDayField";

const weekendDays = ["Sábado", "Domingo"];

export const WeekendDaysField = () => {
  const { field, formState } = useController<ScheduleFormValuesType>({ name: "schedule" });

  const errors = useMemo(
    () => ((formState.errors.schedule || []) as ErrorOption[]).map((error) => error.message),
    [formState.errors.schedule]
  );

  return (
    <>
      {weekendDays.map((day, index) => {
        const dayIndex = index + 5;
        return (
          <WeekDayField
            error={errors[dayIndex]}
            key={day}
            label={day}
            value={(field.value as ScheduleFormValuesType["schedule"])[dayIndex]}
            onChange={(value) => {
              const newValues = (field.value as ScheduleFormValuesType["schedule"]).map((v, i) =>
                i === dayIndex ? value : v
              );
              field.onChange(newValues);
            }}
          />
        );
      })}
    </>
  );
};

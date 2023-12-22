import React, { useMemo } from "react";

import { ErrorOption, useController } from "react-hook-form";

import { ScheduleFormValuesType } from "./schema";
import { WeekDayField } from "./WeekDayField";

export const GroupedWeekDaysField = () => {
  const { field, formState } = useController<ScheduleFormValuesType>({ name: "schedule" });

  const errors = useMemo(
    () => ((formState.errors.schedule || []) as ErrorOption[]).map((error) => error.message),
    [formState.errors.schedule]
  );

  return (
    <WeekDayField
      error={errors[0]}
      label="Lunes - Viernes"
      value={(field.value as ScheduleFormValuesType["schedule"])[0]}
      onChange={(value) => {
        const values: ScheduleFormValuesType["schedule"] = Array.from({ length: 5 }, () => value).map((v) => ({
          startTime: v.startTime,
          endTime: v.endTime,
          isClosed: v.isClosed,
        }));

        const weekendValues = (field.value as ScheduleFormValuesType["schedule"]).slice(5);

        field.onChange(values.concat(weekendValues));
      }}
    />
  );
};

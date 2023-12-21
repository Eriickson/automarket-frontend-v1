import React from "react";

import { useController } from "react-hook-form";

import { ScheduleFormValuesType } from "./schema";
import { WeekDayField } from "./WeekDayField";

export const GroupedWeekDaysField = () => {
  const { field } = useController({ name: "schedule" });

  console.log(field.value);

  return (
    <WeekDayField
      label="Lunes - Viernes"
      value={field.value.at(0)}
      onChange={(value) => {
        const values: ScheduleFormValuesType["schedule"] = Array.from({ length: 5 }, () => value).map((v) => ({
          startTime: v.startTime,
          endTime: v.endTime,
          isClosed: v.isClosed,
        }));

        const weekendValues = field.value.slice(5);

        field.onChange(values.concat(weekendValues));
      }}
    />
  );
};

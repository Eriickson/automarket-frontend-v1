import React from "react";

import { useController } from "react-hook-form";

import { WeekDayField } from "./WeekDayField";

export const GroupedWeekDaysField = () => {
  const { field } = useController({
    name: "schedule",
    defaultValue: [{ startTime: "", endTime: "", isClosed: false }],
  });

  return (
    <WeekDayField
      label="Lunes - Viernes"
      value={field.value.at(0)}
      onChange={(value) => {
        const values = Array.from({ length: 5 }, () => value).map((v) => ({
          startTime: v.startTime,
          endTime: v.endTime,
          isClosed: v.isClosed,
        }));

        field.onChange(values);
      }}
    />
  );
};

import React from "react";

import { useController } from "react-hook-form";

import { WeekDayField } from "./WeekDayField";

const weekendDays = ["Sábado", "Domingo"];

export const WeekendDaysField = () => {
  const { field, formState } = useController({ name: "schedule" });

  console.log(formState.errors);

  return (
    <>
      {weekendDays.map((day, index) => {
        const dayIndex = index + 5;
        return (
          <WeekDayField
            error="Asegúrate de seleccionar un horario válido"
            key={day}
            label={day}
            value={field.value.at(dayIndex)}
            onChange={(value) => field.onChange(field.value.map((v: any, i: number) => (i === dayIndex ? value : v)))}
          />
        );
      })}
    </>
  );
};

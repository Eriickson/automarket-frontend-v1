import React from "react";

import { WeekDayField } from "./WeekDayField";

const weekendDays = ["Sábado", "Domingo"];

export const WeekendDaysField = () => {
  return (
    <>
      {weekendDays.map((day) => (
        <WeekDayField
          key={day}
          label={day} /* value={{ endTime: "09:00", isWorkingDay: true, startTime: "09:00" }} */
        />
      ))}
    </>
  );
};

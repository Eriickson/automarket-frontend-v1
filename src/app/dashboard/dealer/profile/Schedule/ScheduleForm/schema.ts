import moment from "moment";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const scheduleFormSchema = z.object({
  schedule: z
    .array(
      z
        .object({
          startTime: z.string(),
          endTime: z.string(),
          isClosed: z.boolean(),
        })
        .refine(
          (data) => {
            if (data.isClosed) return true;
            return moment(data.startTime, "HH:mm").isBefore(moment(data.endTime, "HH:mm"));
          },
          { message: "El horario seleccionado no es válido" }
        )
    )

    .min(7)
    .max(7),
  // .refine(
  //   (data) => {
  //     const allDaysIsClosed = data.every((day) => day.isClosed);
  //     return !allDaysIsClosed;
  //   },
  //   { message: "Debe de seleccionar al menos un día de apertura" }
  // ),
  isGroupedWeekDays: z.boolean(),
});

export const resolver = zodResolver(scheduleFormSchema);

export type ScheduleFormValuesType = z.infer<typeof scheduleFormSchema>;

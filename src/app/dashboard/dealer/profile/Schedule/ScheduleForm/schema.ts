import moment from "moment";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const scheduleFormSchema = z.object({
  schedule: z
    .array(
      z
        .object({
          startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Debes ingresar una hora válida"),
          endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Debes ingresar una hora válida"),
          isClosed: z.boolean(),
        })
        .refine(
          (data) => {
            if (data.isClosed) return true;
            return moment(data.startTime, "HH:mm").isBefore(moment(data.endTime, "HH:mm"));
          },
          { message: "La hora de cierre debe ser mayor a la hora de apertura" }
        )
    )
    .min(7)
    .max(7),
});

export const resolver = zodResolver(scheduleFormSchema);

export type ScheduleFormValuesType = z.infer<typeof scheduleFormSchema>;

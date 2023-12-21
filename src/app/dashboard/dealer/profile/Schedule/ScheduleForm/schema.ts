import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const scheduleFormSchema = z.object({
  schedule: z
    .array(
      z.object({
        startTime: z.string(),
        endTime: z.string(),
        isClosed: z.boolean(),
      })
    )
    .min(7)
    .max(7),
});

export const resolver = zodResolver(scheduleFormSchema);

export type ScheduleFormValuesType = z.infer<typeof scheduleFormSchema>;

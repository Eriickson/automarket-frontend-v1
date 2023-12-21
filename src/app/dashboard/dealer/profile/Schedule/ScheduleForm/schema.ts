import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const scheduleFormSchema = z.object({});

export const resolver = zodResolver(scheduleFormSchema);

export type ScheduleFormValuesType = z.infer<typeof scheduleFormSchema>;

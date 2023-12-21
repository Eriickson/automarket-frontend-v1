import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const digitalPresenceFormSchema = z.object({});

export const resolver = zodResolver(digitalPresenceFormSchema);

export type DigitalPresenceFormValuesType = z.infer<typeof digitalPresenceFormSchema>;

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const digitalPresenceFormSchema = z.object({
  socialMedia: z.array(z.object({ url: z.string().url().optional().or(z.literal("")), socialMedia: z.string() })),
  messagingServices: z.array(
    z.object({ url: z.string().url().optional().or(z.literal("")), messagingService: z.string() })
  ),
  websites: z.array(z.object({ url: z.string().url(), title: z.string().min(3).max(50) })),
});

export const resolver = zodResolver(digitalPresenceFormSchema);

export type DigitalPresenceFormValuesType = z.infer<typeof digitalPresenceFormSchema>;

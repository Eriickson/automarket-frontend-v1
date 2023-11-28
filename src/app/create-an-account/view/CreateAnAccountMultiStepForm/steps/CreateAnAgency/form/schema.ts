import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const registerAgencySchema = z.object({
  name: z.string().min(3),
  slogan: z.string().min(3),
  province: z
    .array(z.object({ label: z.string(), value: z.string() }).required())
    .min(1, "Debes de realizar una selección")
    .max(1),
  municipality: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(1, "Debes de realizar una selección")
    .max(1),
  sector: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(1, "Debes de realizar una selección")
    .max(1),
  reference: z.string().min(3),
});

export const resolver = zodResolver(registerAgencySchema);

export type RegisterAgencyFormType = z.infer<typeof registerAgencySchema>;

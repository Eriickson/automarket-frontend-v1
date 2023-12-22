import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const generalInformationFormSchema = z.object({
  name: z.string().min(3).max(50).optional(),
  slogan: z.string().min(3).max(50).optional(),
  description: z.string().min(3).max(50).optional(),
});

export const resolver = zodResolver(generalInformationFormSchema);

export type GeneralInformationFormValuesType = z.infer<typeof generalInformationFormSchema>;

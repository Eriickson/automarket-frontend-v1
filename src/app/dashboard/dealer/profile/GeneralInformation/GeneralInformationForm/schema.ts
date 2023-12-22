import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const generalInformationFormSchema = z.object({});

export const resolver = zodResolver(generalInformationFormSchema);

export type GeneralInformationFormValuesType = z.infer<typeof generalInformationFormSchema>;

import { optionFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const registerAgencySchema = z.object({
  name: z.string().min(3),
  slogan: z.string().min(3),
  province: optionFieldValidation(),
  municipality: optionFieldValidation(),
  sector: optionFieldValidation(),
  reference: z.string().min(3),
});

export const resolver = zodResolver(registerAgencySchema);

export type RegisterAgencyFormType = z.infer<typeof registerAgencySchema>;

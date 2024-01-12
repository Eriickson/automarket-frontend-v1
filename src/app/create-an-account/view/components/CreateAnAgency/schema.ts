import { optionFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const registerAgencySchema = z.object({
  name: z
    .string()
    .min(1, "Este campo es requerido")
    .min(3, "El nombre es demasiado corto")
    .max(50, "El nombre es demasiado largo"),
  slogan: z.string().min(3),
  province: optionFieldValidation(),
  municipality: optionFieldValidation(),
  sector: optionFieldValidation(),
  street: z.string().min(3),
  reference: z.string().min(3),
});

export const resolver = zodResolver(registerAgencySchema);

export type CreateAnAgencyFormValuesType = z.infer<typeof registerAgencySchema>;

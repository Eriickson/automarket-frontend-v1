import { optionFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const addressFormSchema = z.object({
  location: z.object({
    province: optionFieldValidation(),
    municipality: optionFieldValidation(),
    sector: optionFieldValidation(),
    street: z.string().min(3),
    reference: z.string().min(3),
  }),
  // geolocation: z.object({
  //   latitude: z.string().min(3),
  //   longitude: z.string().min(3),
  // }),
});

export const resolver = zodResolver(addressFormSchema);

export type AddressFormValuesType = z.infer<typeof addressFormSchema>;

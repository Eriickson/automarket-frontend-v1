import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const createAnAccountFormSchema = z.object({
  email: z.string().email("El email no es válido").min(1, "Este campo es requerido"),
});

export const resolver = zodResolver(createAnAccountFormSchema);

export type CreateAnAccountValuesFormType = z.infer<typeof createAnAccountFormSchema>;

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  phoneNumbers: z.array(
    z.object({
      title: z.string().min(1, "Este campo es requerido"),
      value: z.string().min(1, "Este campo es requerido"),
    })
  ),
  emails: z.array(
    z.object({
      title: z.string().min(1, "Este campo es requerido"),
      value: z.string().email("Debe ser un correo válido"),
    })
  ),
});

export const resolver = zodResolver(contactFormSchema);

export type ContactFormValuesType = z.infer<typeof contactFormSchema>;

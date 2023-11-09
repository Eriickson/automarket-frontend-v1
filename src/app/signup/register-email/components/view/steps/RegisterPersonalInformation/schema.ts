import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const registerPersonalInformationSchema = z.object({
  fullname: z.string().min(1, "Este campo es requerido"),
  birthday: z.string().min(1, "Este campo es requerido"),
});

export const resolver = zodResolver(registerPersonalInformationSchema);

export type RegisterPersonalInformationFormType = z.infer<typeof registerPersonalInformationSchema>;

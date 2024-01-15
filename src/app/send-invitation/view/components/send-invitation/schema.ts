import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const sendInvitationFormSchema = z.object({
  email: z.string().min(1, "Este campo es requerido").email("Ingrese un correo electrónico válido"),
});

export const resolver = zodResolver(sendInvitationFormSchema);

export type SendInvitationFormValuesType = z.infer<typeof sendInvitationFormSchema>;

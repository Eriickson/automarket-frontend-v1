import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const sendPasswordRecoveryRequestSchema = z.object({
  email: z.string().min(1, "Correo electrónico requerido").email("Correo electrónico inválido"),
});

export const resolver = zodResolver(sendPasswordRecoveryRequestSchema);

export type SendPasswordRecoveryRequestFormType = z.infer<typeof sendPasswordRecoveryRequestSchema>;

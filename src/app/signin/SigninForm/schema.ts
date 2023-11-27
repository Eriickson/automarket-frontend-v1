import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const signinFormSchema = z.object({
  identifier: z.string().min(1, "Este campo es requerido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "La contraseña debe tener al menos 8 caracteres"),
  rememberMe: z.boolean(),
});

export const signinFormSchemaResolver = zodResolver(signinFormSchema);

export type SigninFormType = z.infer<typeof signinFormSchema>;

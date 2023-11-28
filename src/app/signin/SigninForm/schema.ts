import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const signinFormSchema = z.object({
  identifier: z.string().min(1, "Este campo es requerido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-=_+{};':"\\|,.<>?]{8,}$/,
      "La contraseña debe estar compuesta por números y letras"
    ),
  rememberMe: z.boolean(),
});

export const signinFormSchemaResolver = zodResolver(signinFormSchema);

export type SigninValuesFormType = z.infer<typeof signinFormSchema>;

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const enterYourNewPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-=_+{};':"\\|,.<>?]{8,}$/,
        "La contraseña debe estar compuesta por números y letras"
      ),

    passwordConfirmation: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-=_+{};':"\\|,.<>?]{8,}$/,
        "La contraseña debe estar compuesta por números y letras"
      ),
  })
  .refine((data) => data.newPassword === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Las contraseñas no coinciden",
  });

export const resolver = zodResolver(enterYourNewPasswordSchema);

export type EnterYourNewPasswordFormType = z.infer<typeof enterYourNewPasswordSchema>;

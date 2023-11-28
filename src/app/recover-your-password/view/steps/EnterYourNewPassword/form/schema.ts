import { passwordFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const enterYourNewPasswordSchema = z
  .object({
    newPassword: passwordFieldValidation(),
    passwordConfirmation: passwordFieldValidation(),
  })
  .refine((data) => data.newPassword === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Las contraseñas no coinciden",
  });

export const resolver = zodResolver(enterYourNewPasswordSchema);

export type EnterYourNewPasswordFormType = z.infer<typeof enterYourNewPasswordSchema>;

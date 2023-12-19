import { passwordFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const enterYourNewPasswordSchema = z
  .object({
    newPassword: passwordFieldValidation(),
    newPasswordConfirmation: passwordFieldValidation(),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirmation, {
    path: ["newPasswordConfirmation"],
    message: "Las contraseñas no coinciden",
  });

export const resolver = zodResolver(enterYourNewPasswordSchema);

export type EnterYourNewPasswordFormType = z.infer<typeof enterYourNewPasswordSchema>;

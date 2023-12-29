import { birthdateFieldValidation, passwordFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const registerPersonalInformationSchema = z
  .object({
    fullname: z.string().min(1, "Este campo es requerido"),
    birthdate: birthdateFieldValidation({ gt: 18 }),
    email: z.string().email("El formato de email no es válido").min(1, "Este campo es requerido"),
    password: passwordFieldValidation(),
    passwordConfirmation: passwordFieldValidation(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Las contraseñas no coinciden",
  });

export const resolver = zodResolver(registerPersonalInformationSchema);

export type RegisterPersonalInformationFormType = z.infer<typeof registerPersonalInformationSchema>;

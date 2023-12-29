import { passwordFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const signinFormSchema = z.object({
  identifier: z.string().min(1, "Este campo es requerido"),
  password: passwordFieldValidation(),
  rememberMe: z.boolean(),
});

export const resolver = zodResolver(signinFormSchema);

export type SigninValuesFormType = z.infer<typeof signinFormSchema>;

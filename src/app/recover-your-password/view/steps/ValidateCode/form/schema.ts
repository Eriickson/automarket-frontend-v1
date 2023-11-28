import { codeFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const validateCodeSchema = z.object({
  passwordResetCode: codeFieldValidation({ length: 6 }),
});

export const resolver = zodResolver(validateCodeSchema);

export type ValidateCodeFormType = z.infer<typeof validateCodeSchema>;

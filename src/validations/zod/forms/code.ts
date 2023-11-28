import { z } from "zod";

export const codeFieldValidation = ({ length }: { length: number }) =>
  z
    .string({
      required_error: `Debes ingresar el código de ${length} dígitos`,
    })
    .min(length, { message: `El código debe tener ${length} dígitos` })
    .max(length, { message: `El código debe tener ${length} dígitos` })
    .regex(/^\d+$/, { message: "El código debe contener solo números" });

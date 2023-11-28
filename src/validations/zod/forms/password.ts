import { z } from "zod";

export const passwordFieldValidation = () =>
  z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-=_+{};':"\\|,.<>?]{8,}$/,
      "La contraseña debe estar compuesta por números y letras"
    );

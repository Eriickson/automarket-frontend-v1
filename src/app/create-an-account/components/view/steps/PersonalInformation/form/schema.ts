import moment from "moment";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const registerPersonalInformationSchema = z
  .object({
    fullname: z.string().min(1, "Este campo es requerido"),
    birthday: z
      .string()
      .regex(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/, "El formato de fecha no es válido")
      .refine((data) => moment(new Date(data)).isValid(), { message: "La fecha no es válida" })
      .refine((data) => moment().diff(new Date(data), "years") >= 18, { message: "Debes ser mayor de edad" }),
    email: z.string().email("El formato de email no es válido").min(1, "Este campo es requerido"),
    username: z.string().min(1, "Este campo es requerido"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "La contraseña debe tener al menos 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });

export const resolver = zodResolver(registerPersonalInformationSchema);

export type RegisterPersonalInformationFormType = z.infer<typeof registerPersonalInformationSchema>;

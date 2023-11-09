import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import moment from "moment";

const registerPersonalInformationSchema = z.object({
  // fullname: z
  //   .string()
  //   .min(1, "Este campo es requerido")
  //   .regex(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/, "El formato de fecha es dd-mm-yyyy")
  //   .refine(
  //     (data) => {
  //       const date = moment(data, "DD-MM-YYYY");
  //       return date.isValid();
  //     },
  //     { message: "La fecha no es válida" }
  //   )
  //   .refine(
  //     (data) => {
  //       const date = moment(data, "DD-MM-YYYY");
  //       return moment().diff(date, "years") >= 18;
  //     },
  //     { message: "Debes ser mayor de edad" }
  //   ),
  // birthday: z.string().min(1, "Este campo es requerido"),
});

export const resolver = zodResolver(registerPersonalInformationSchema);

export type RegisterPersonalInformationFormType = z.infer<typeof registerPersonalInformationSchema>;

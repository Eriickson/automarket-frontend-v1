import moment from "moment";
import { z } from "zod";

export const birthdateFieldValidation = (args?: Partial<{ gt: number }>) =>
  z
    .string()
    .regex(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/, "El formato de fecha no es válido")
    .refine((data) => moment(new Date(data)).isValid(), { message: "La fecha no es válida" })
    .refine((data) => (args?.gt ? moment().diff(new Date(data), "years") >= args.gt : true), {
      message: "Debes ser mayor de edad",
    });

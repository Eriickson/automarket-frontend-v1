import { z } from "zod";

export const optionFieldValidation = () =>
  z
    .array(z.object({ label: z.string(), value: z.string() }), {
      required_error: "Debes de realizar una selección",
    })
    .nonempty("Debes de realizar una selección");

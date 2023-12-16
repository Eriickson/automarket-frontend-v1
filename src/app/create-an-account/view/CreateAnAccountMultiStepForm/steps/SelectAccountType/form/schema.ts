import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const selectAccountTypeSchema = z.object({
  accountType: z.enum(["particular", "dealer", "rent-a-car"]),
});

export const resolver = zodResolver(selectAccountTypeSchema);

export type SelectAccountTypeFormType = z.infer<typeof selectAccountTypeSchema>;

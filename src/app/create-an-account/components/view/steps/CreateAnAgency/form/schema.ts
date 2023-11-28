import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const registerAgencySchema = z.object({});

export const resolver = zodResolver(registerAgencySchema);

export type RegisterAgencyFormType = z.infer<typeof registerAgencySchema>;

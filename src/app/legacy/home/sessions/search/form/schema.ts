import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({});

export const resolver = zodResolver(searchSchema);

export type SearchFormType = z.infer<typeof searchSchema>;

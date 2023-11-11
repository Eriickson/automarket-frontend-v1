import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const validateInvitationCodeSchema = z.object({
  invitationCode: z.string().regex(/^[0-9]{6}$/, "El código de invitación debe tener 6 dígitos"),
});

export const resolver = zodResolver(validateInvitationCodeSchema);

export type ValidateInvitationCodeFormType = z.infer<typeof validateInvitationCodeSchema>;

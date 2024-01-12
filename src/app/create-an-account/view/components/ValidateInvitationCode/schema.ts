import { codeFieldValidation } from "@/validations/zod/forms";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const validateInvitationCodeSchema = z.object({
  invitationCode: codeFieldValidation({ length: 6 }),
});

export const resolver = zodResolver(validateInvitationCodeSchema);

export type ValidateInvitationCodeValuesFormType = z.infer<typeof validateInvitationCodeSchema>;

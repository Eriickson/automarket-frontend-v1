import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

type Args = {
  email: string;
  invitationCode: string;
};

type Response = {
  email: string;
  token: string;
};

export const validateInvitationCode = (build: EndpointBuilderType<"authApi">) => {
  return build.query<ServiceResponse<Response>, Args>({
    query: ({ email, invitationCode }) => ({
      url: ENDPOINTS.AUTH.VALIDATE_INVITATION_CODE,
      method: "POST",
      data: { email, invitationCode },
    }),
  });
};

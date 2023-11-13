import { ENDPOINTS } from "@/utils";

import { EndpointBuilderType } from "@atmk/core";

type Args = {
  email: string;
  invitationCode: string;
};

type Response = {
  data: {
    email: string;
    token: string;
  };
};

export const validateInvitationCode = (build: EndpointBuilderType<"authApi">) => {
  return build.query<Response, Args>({
    query: ({ email, invitationCode }) => ({
      url: ENDPOINTS.AUTH.VALIDATE_INVITATION_CODE,
      method: "POST",
      data: { email, invitationCode },
    }),
  });
};

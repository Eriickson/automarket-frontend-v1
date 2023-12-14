import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

type Args = {
  data: {
    email: string;
  };
};

type Response = {
  status: string;
  data: { id: string };
};

export const sendInvitationCode = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<Response, Args>({
    query: ({ data }) => ({ url: ENDPOINTS.AUTH.SEND_INVITATION_CODE, method: "POST", data }),
  });
};

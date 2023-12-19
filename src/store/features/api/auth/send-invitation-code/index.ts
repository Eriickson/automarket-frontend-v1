import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { SendInvitationCodeArgsType } from "./types";

export const sendInvitationCode = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<SendInvitationCodeArgsType>, SendInvitationCodeArgsType>({
    query: ({ data }) => ({ url: ENDPOINTS.AUTH.SEND_INVITATION_CODE, method: "POST", data }),
  });
};

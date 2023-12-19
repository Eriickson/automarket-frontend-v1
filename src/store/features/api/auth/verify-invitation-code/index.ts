import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import queryString from "query-string";

import { VerifyInvitationCodeArgsType, VerifyInvitationCodeReturnType } from "./types";

export const verifyInvitationCode = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<VerifyInvitationCodeReturnType>, VerifyInvitationCodeArgsType>({
    query(arg) {
      return {
        url: ENDPOINTS.AUTH.VERIFY_INVITATION_CODE.concat("?").concat(queryString.stringify(arg.queryParams)),
        method: "GET",
      };
    },
  });
};

import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

import queryString from "query-string";

type Args = {
  queryParams: {
    email: string;
    code: string;
  };
};

type Response = {
  data: {
    id: string;
    token: string;
  };
};

export const verifyInvitationCode = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<Response, Args>({
    query(arg) {
      return {
        url: ENDPOINTS.AUTH.VERIFY_INVITATION_CODE.concat(queryString.stringify(arg.queryParams)),
        method: "GET",
      };
    },
  });
};

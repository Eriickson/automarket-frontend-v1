import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

import queryString from "query-string";

type Args = {
  queryParams: {
    identifier: string;
    code: string;
  };
};

type Response = {
  data: {
    passwordResetToken: string;
  };
};

export const verifyPasswordResetRequest = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<Response, Args>({
    query: ({ queryParams }) => ({
      url: ENDPOINTS.AUTH.PASSWORD_RESET.concat("?").concat(queryString.stringify(queryParams)),
      method: "GET",
    }),
  });
};

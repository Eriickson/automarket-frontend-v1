import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import queryString from "query-string";

import { VerifyPasswordResetRequestArgsType, VerifyPasswordResetRequestReturnType } from "./types";

export const verifyPasswordResetRequest = (build: EndpointBuilderType<"authApi">) => {
  return build.query<ServiceResponse<VerifyPasswordResetRequestReturnType>, VerifyPasswordResetRequestArgsType>({
    query: ({ queryParams }) => ({
      url: ENDPOINTS.AUTH.PASSWORD_RESET_REQUEST.concat("?").concat(queryString.stringify(queryParams)),
      method: "GET",
    }),
  });
};

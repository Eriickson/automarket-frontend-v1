import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { ResetPasswordArgsType, ResetPasswordReturnType } from "./types";

export const resetPassword = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<ResetPasswordReturnType>, ResetPasswordArgsType>({
    query: ({ data, headers }) => ({
      url: ENDPOINTS.AUTH.PASSWORD_RESET,
      method: "POST",
      data,
      headers,
    }),
  });
};

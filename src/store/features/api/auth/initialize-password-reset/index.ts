import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { InitializePasswordResetArgsType, InitializePasswordResetReturnType } from "./types";

export const initializePasswordReset = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<InitializePasswordResetReturnType>, InitializePasswordResetArgsType>({
    query: ({ data }) => ({ url: ENDPOINTS.AUTH.PASSWORD_RESET_REQUEST, method: "POST", data }),
  });
};

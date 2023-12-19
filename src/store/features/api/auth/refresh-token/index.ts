import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { RefreshTokenArgsType, RefreshTokenReturnType } from "./types";

export const refreshToken = (build: EndpointBuilderType<"authApi">) => {
  return build.query<ServiceResponse<RefreshTokenReturnType>, RefreshTokenArgsType>({
    query: ({ headers }) => ({ url: ENDPOINTS.AUTH.REFRESH_TOKEN, method: "POST", headers }),
  });
};

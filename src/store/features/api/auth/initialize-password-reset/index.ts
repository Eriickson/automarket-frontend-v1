import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

type Args = {
  identifier: string;
  mode: string;
};

type Response = {
  identifier: string;
  status: string;
};

export const initializePasswordReset = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<Response, Args>({
    query: (data) => ({ url: ENDPOINTS.AUTH.PASSWORD_RESET_REQUEST, method: "POST", data }),
  });
};

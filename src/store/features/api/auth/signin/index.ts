import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { SigninArgsType, SigninReturnType } from "./types";

export const signin = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<SigninReturnType>, SigninArgsType>({
    query: ({ data, headers }) => ({ url: ENDPOINTS.AUTH.SIGNIN, method: "POST", data, headers }),
  });
};

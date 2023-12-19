import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { SignupArgsType, SignupReturnType } from "./types";

export const signup = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<SignupReturnType>, SignupArgsType>({
    query: ({ data, headers }) => ({ url: ENDPOINTS.AUTH.SIGNUP, method: "POST", data, headers }),
  });
};

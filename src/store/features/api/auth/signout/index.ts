import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { SignoutArgsType, SignoutReturnType } from "./types";

export const signout = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<SignoutReturnType>, SignoutArgsType>({
    query: ({ headers }) => ({ url: ENDPOINTS.AUTH.SIGNOUT, method: "POST", headers }),
  });
};

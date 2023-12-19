import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

type Args = {
  newPassword: string;
  newPasswordConfirmation: string;
};

type Response = {
  status: string;
  userId: string;
};

export const resetPassword = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<Response>, Args>({
    query: (data) => ({ url: ENDPOINTS.AUTH.PASSWORD_RESET, method: "POST", data }),
  });
};

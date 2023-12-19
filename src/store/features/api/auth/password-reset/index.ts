import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

type Args = {
  data: {
    newPassword: string;
    newPasswordConfirmation: string;
  };
  headers: {
    "x-password-reset-token": string;
  };
};

type Response = {
  status: string;
  userId: string;
};

export const resetPassword = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<ServiceResponse<Response>, Args>({
    query: ({ data, headers }) => ({
      url: ENDPOINTS.AUTH.PASSWORD_RESET,
      method: "POST",
      data,
      headers: { ...headers },
    }),
  });
};

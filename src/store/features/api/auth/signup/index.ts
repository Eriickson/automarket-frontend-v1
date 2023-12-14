import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

type Args = {
  data: {
    fullname: string;
    birthdate: string;
    password: string;
    passwordConfirmation: string;
  };
  headers: {
    "x-registration-token": string;
  };
};

type Response = {
  message: string;
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
};

export const signup = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<Response, Args>({
    query: ({ data, headers }) => ({ url: ENDPOINTS.AUTH.SIGNUP, method: "POST", data, headers }),
  });
};

import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

type Args = {
  data: {
    identifier: string;
    password: string;
  };
};

type Response = {
  message: string;
  data: {
    session: {
      tokens: {
        accessToken: string;
        refreshToken: string;
      };
    };
  };
};

export const signin = (build: EndpointBuilderType<"authApi">) => {
  return build.mutation<Response, Args>({
    query: ({ data }) => ({ url: ENDPOINTS.AUTH.SIGNIN, method: "POST", data }),
  });
};

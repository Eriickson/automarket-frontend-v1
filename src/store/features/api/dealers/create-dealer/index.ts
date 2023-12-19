import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

type Args = {
  data: {
    name: string;
    slogan: string;
  };
};

export const createDealer = (build: EndpointBuilderType<"dealersApi">) => {
  return build.mutation<Response, Args>({
    query: ({ data }) => ({ url: ENDPOINTS.DEALERS.ROOT, method: "POST", data }),
  });
};

import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

type Response = {
  data: string;
};

export const getProvinces = (build: EndpointBuilderType<"provincesApi">) => {
  return build.query<ServiceResponse<Response>, null>({
    query: () => ({
      url: "/",
      method: "GET",
    }),
  });
};

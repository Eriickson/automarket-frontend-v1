import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { GetProvincesReturnType } from "./types";

export const getProvinces = (build: EndpointBuilderType<"provincesApi">) => {
  return build.query<ServiceResponse<GetProvincesReturnType>, void>({
    query: () => ({ url: "/", method: "GET" }),
  });
};

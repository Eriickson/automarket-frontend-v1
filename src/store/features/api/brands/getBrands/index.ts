import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { GetBrandsArgsType, GetBrandsReturnType } from "./types";

export const getBrands = (build: EndpointBuilderType<"brandsApi">) => {
  return build.query<ServiceResponse<GetBrandsReturnType>, GetBrandsArgsType>({
    query: () => ({ url: ENDPOINTS.BRANDS.GET_BRANDS, method: "GET" }),
  });
};

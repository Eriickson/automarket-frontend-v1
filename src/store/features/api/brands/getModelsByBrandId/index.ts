import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS, generateDynamicEndpoint } from "@/utils";

import { GetModelsByBrandIdArgsType, GetModelsByBrandIdReturnType } from "./types";

export const getModelsByBrandId = (build: EndpointBuilderType<"brandsApi">) => {
  return build.query<ServiceResponse<GetModelsByBrandIdReturnType>, GetModelsByBrandIdArgsType>({
    query: ({ queryParams }) => ({
      url: generateDynamicEndpoint(ENDPOINTS.BRANDS.GET_MODELS_BY_BRAND_ID, queryParams.brandId),
      method: "GET",
    }),
  });
};

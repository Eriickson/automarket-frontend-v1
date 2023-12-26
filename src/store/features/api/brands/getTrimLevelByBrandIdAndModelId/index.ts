// getTrimLevelByBrandIdAndModelId;
import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS } from "@/utils";

import { GetTrimLevelByBrandIdAndModelIdArgsType, GetTrimLevelByBrandIdAndModelIdReturnType } from "./types";

export const getTrimLevelByBrandIdAndModelId = (build: EndpointBuilderType<"brandsApi">) => {
  return build.query<
    ServiceResponse<GetTrimLevelByBrandIdAndModelIdReturnType>,
    GetTrimLevelByBrandIdAndModelIdArgsType
  >({
    query: ({ queryParams }) => ({ url: ENDPOINTS.BRANDS.GET_TRIM_LEVEL_BY_BRAND_ID_AND_MODEL_ID, method: "GET" }),
  });
};

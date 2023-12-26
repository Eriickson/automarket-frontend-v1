import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

import { getBrands } from "./getBrands";
import { getModelsByBrandId } from "./getModelsByBrandId";
import { getTrimLevelByBrandIdAndModelId } from "./getTrimLevelByBrandIdAndModelId";

export const brandsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/brands" }),
  reducerPath: "brandsApi",
  endpoints: (build) => ({
    getBrands: getBrands(build),
    getModelsByBrandId: getModelsByBrandId(build),
    getTrimLevelByBrandIdAndModelId: getTrimLevelByBrandIdAndModelId(build),
  }),
});

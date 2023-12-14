import { axiosBaseQuery } from "@/store/baseQueries";

import { getProvinces } from "./getProvinces";
import { createApi } from "@reduxjs/toolkit/query/react";

export const provincesApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/provinces" }),
  reducerPath: "provincesApi",
  endpoints: (build) => ({
    getProvinces: getProvinces(build),
  }),
});

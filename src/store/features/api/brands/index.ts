import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

export const brandsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/brands" }),
  reducerPath: "brandsApi",
  endpoints: (build) => ({}),
});

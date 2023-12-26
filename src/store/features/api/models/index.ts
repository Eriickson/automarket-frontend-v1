import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

export const modelsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/models" }),
  reducerPath: "modelsApi",
  endpoints: (build) => ({}),
});

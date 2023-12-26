import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

export const trimLevelsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/trim-levels" }),
  reducerPath: "trimLevelsApi",
  endpoints: (build) => ({}),
});

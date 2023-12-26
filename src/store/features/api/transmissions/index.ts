import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

export const transmissionsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/transmissions" }),
  reducerPath: "transmissionsApi",
  endpoints: (build) => ({}),
});

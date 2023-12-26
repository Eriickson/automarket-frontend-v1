import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

export const tractionsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/tractions" }),
  reducerPath: "tractionsApi",
  endpoints: (build) => ({}),
});

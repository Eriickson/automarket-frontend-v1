import { axiosBaseQuery } from "@/store/baseQueries";

import { createApi } from "@reduxjs/toolkit/query";

export const dealerApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/dealers" }),
  reducerPath: "dealerApi",
  endpoints: (build) => ({}),
});

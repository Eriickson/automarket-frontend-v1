import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

import { getSectors } from "./getSectors";

export const sectorsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/provinces" }),
  reducerPath: "sectorsApi",
  endpoints: (build) => ({
    getSectors: getSectors(build),
  }),
});

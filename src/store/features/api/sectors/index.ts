import { axiosBaseQuery } from "@/store/baseQueries";

import { getSectors } from "./getSectors";
import { createApi } from "@reduxjs/toolkit/query/react";

export const sectorsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/provinces" }),
  reducerPath: "sectorsApi",
  endpoints: (build) => ({
    getSectors: getSectors(build),
  }),
});

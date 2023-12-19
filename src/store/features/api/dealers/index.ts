import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

import { createDealer } from "./create-dealer";

export const dealersApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/dealers" }),
  reducerPath: "dealersApi",
  endpoints: (build) => ({
    createDealer: createDealer(build),
  }),
});

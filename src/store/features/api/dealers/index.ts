import { axiosBaseQuery } from "@/store/baseQueries";

import { createDealer } from "./create-dealer";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dealersApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/dealers" }),
  reducerPath: "dealersApi",
  endpoints: (build) => ({
    createDealer: createDealer(build),
  }),
});
import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

export const vehicleConditionsApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/vehicle=conditions" }),
  reducerPath: "vehicleConditionsApi",
  endpoints: (build) => ({}),
});

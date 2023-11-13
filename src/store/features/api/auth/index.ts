import { axiosBaseQuery } from "@/store/baseQueries";

import { checkFieldAvailability } from "./checkFieldAvailability";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/auth" }),
  reducerPath: "authApi",
  endpoints: (build) => ({
    checkFieldAvailability: checkFieldAvailability(build),
  }),
});

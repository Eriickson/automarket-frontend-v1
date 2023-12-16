import { axiosBaseQuery } from "@/store/baseQueries";

import { updateAddress } from "./update-address";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dealerBranchesApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/dealers" }),
  reducerPath: "dealerBranchesApi",
  endpoints: (build) => ({
    updateAddress: updateAddress(build),
  }),
});

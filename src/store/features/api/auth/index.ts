import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/store/baseQueries";

type CheckFieldAvailabilityArgs = {
  field: string;
  value: string;
};

export const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "authApi",
  endpoints: (build) => ({
    checkFieldAvailability: build.query({
      query: ({ field, value }: CheckFieldAvailabilityArgs) => ({
        url: `/auth/check-field-availability/${field}/${value}`,
        method: "GET",
      }),
    }),
  }),
});

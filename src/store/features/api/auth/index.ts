import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/store/baseQueries";

type CheckFieldAvailabilityArgs = {
  field: string;
  value: string;
};

type CheckFieldAvailabilityResponse = {
  data: {
    available: boolean;
  };
};

export const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "authApi",
  endpoints: (build) => ({
    checkFieldAvailability: build.query<CheckFieldAvailabilityResponse, CheckFieldAvailabilityArgs>({
      query: ({ field, value }) => ({
        url: `/auth/check-field-availability/${field}/${value}`,
        method: "GET",
      }),
    }),
  }),
});

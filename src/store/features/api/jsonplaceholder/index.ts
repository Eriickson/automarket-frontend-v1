import { axiosBaseQuery } from "@/store/baseQueries";

import { createApi } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  reducerPath: "jsonServerApi",
  endpoints: (build) => ({
    getTodos: build.query({ query: () => ({ url: "/todos", method: "GET" }) }),
  }),
});

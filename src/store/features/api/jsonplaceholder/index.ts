import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/store/baseQueries";

export const jsonPlaceholderApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  reducerPath: "jsonServerApi",
  endpoints: (build) => ({
    getTodos: build.query({ query: (args) => ({ url: "/todos", method: "GET" }) }),
  }),
});

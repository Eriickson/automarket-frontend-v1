import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const jsonPlaceholderApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  reducerPath: "jsonServerApi",
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => ({ url: "/todos" }),
    }),
  }),
});

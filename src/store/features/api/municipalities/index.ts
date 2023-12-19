import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/store/baseQueries";

import { getMunicipalities } from "./getMunicipalities";

export const municipalitiesApi = createApi({
  baseQuery: axiosBaseQuery({ module: "/provinces" }),
  reducerPath: "municipalitiesApi",
  endpoints: (build) => ({
    getMunicipalities: getMunicipalities(build),
  }),
});

declare module "@atmk/core" {
  import { AxiosBaseQueryFn } from "@/store/baseQueries";

  import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

  export type Modules =
    | "AGENCIES"
    | "AUTH"
    | "BRANCHES"
    | "BRANDS"
    | "COLORS"
    | "FUELS"
    | "MODELS"
    | "MODELS_TYPES"
    | "MUNICIPALITIES"
    | "PROVINCES"
    | "PUBLICATION_DRAFTS"
    | "TRACTIONS"
    | "TRANSMISSIONS"
    | "USERS"
    | "VEHICLE_BODY_TYPES"
    | "VEHICLE_CONDITIONS";

  export type EndpointBuilderType<T extends string> = EndpointBuilder<AxiosBaseQueryFn, never, T>;

  export type EndpointBuilderAgencies = EndpointBuilderType<"AGENCIES">;
}

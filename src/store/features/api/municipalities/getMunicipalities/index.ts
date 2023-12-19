import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { GetMunicipalitiesArgsType, GetMunicipalitiesReturnType } from "./types";

export const getMunicipalities = (build: EndpointBuilderType<"municipalitiesApi">) => {
  return build.query<ServiceResponse<GetMunicipalitiesReturnType>, GetMunicipalitiesArgsType>({
    query: ({ provinceId }) => ({ url: `/${provinceId}/municipalities`, method: "GET" }),
  });
};

import { EndpointBuilderType } from "@atmk/core";

export const getMunicipalities = (build: EndpointBuilderType<"municipalitiesApi">) => {
  return build.query<{ data: any; message: string }, { provinceId: string }>({
    query: ({ provinceId }) => ({ url: `/${provinceId}/municipalities`, method: "GET" }),
  });
};

import { EndpointBuilderType } from "@atmk/core";

export const getSectors = (build: EndpointBuilderType<"sectorsApi">) => {
  return build.query<{ message: string }, { provinceId: string; municipalityId: string }>({
    query: ({ provinceId, municipalityId }) => ({
      url: `/${provinceId}/municipalities/${municipalityId}/sectors`,
      method: "GET",
    }),
  });
};

import { EndpointBuilderType } from "@atmk/core";

import { Option } from "@/components/organisms";

export const getSectors = (build: EndpointBuilderType<"sectorsApi">) => {
  return build.query<{ message: string; data: Option[] }, { provinceId: string; municipalityId: string }>({
    query: ({ provinceId, municipalityId }) => ({
      url: `/${provinceId}/municipalities/${municipalityId}/sectors`,
      method: "GET",
    }),
  });
};

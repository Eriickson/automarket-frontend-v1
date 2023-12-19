import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { Option } from "@/components/organisms";

type GetProvincesReturnType = {
  options: Option[];
};

export const getProvinces = (build: EndpointBuilderType<"provincesApi">) => {
  return build.query<ServiceResponse<GetProvincesReturnType>, void>({
    query: () => ({ url: "/", method: "GET" }),
  });
};

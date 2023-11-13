import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { ENDPOINTS, generateDynamicEndpoint } from "@/utils";

type Args = {
  field: string;
  value: string;
};

type Response = {
  available: boolean;
};

export const checkFieldAvailability = (build: EndpointBuilderType<"authApi">) => {
  return build.query<ServiceResponse<Response>, Args>({
    query: (args) => ({
      url: generateDynamicEndpoint(ENDPOINTS.AUTH.CHECK_FIELD_AVAILABILITY, args),
      method: "GET",
    }),
  });
};

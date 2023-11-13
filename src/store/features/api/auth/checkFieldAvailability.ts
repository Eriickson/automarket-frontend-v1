import { ENDPOINTS, generateDynamicEndpoint } from "@/utils";

import { EndpointBuilderType } from "@atmk/core";

type CheckFieldAvailabilityArgs = {
  field: string;
  value: string;
};

type CheckFieldAvailabilityResponse = {
  data: {
    available: boolean;
  };
};

export const checkFieldAvailability = (build: EndpointBuilderType<"authApi">) => {
  return build.query<CheckFieldAvailabilityResponse, CheckFieldAvailabilityArgs>({
    query: (args) => ({
      url: generateDynamicEndpoint(ENDPOINTS.AUTH.CHECK_FIELD_AVAILABILITY, args),
      method: "GET",
    }),
  });
};

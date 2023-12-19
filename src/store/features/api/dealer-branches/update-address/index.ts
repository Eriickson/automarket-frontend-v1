import { EndpointBuilderType } from "@atmk/core";

import { ENDPOINTS } from "@/utils";

type Address = {
  geolocation?: {
    lat: number;
    lng: number;
  };
  location?: {
    provinceId: string;

    municipalityId: string;

    sectorId: string;

    street: string;

    reference: string;
  };
};

type Args = {
  data: {
    address: Address;
  };
};

export const updateAddress = (build: EndpointBuilderType<"dealerBranchesApi">) => {
  return build.mutation<Response, Args>({
    query: ({ data }) => ({ url: ENDPOINTS.DEALER_BRANCHES.ADDRESS, method: "PUT", data }),
  });
};

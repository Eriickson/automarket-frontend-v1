import { EndpointBuilderType } from "@atmk/core";
import { ServiceResponse } from "@atmk/types";

import { GetSectorsArgsType, GetSectorsReturnType } from "./types";

export const getSectors = (build: EndpointBuilderType<"sectorsApi">) => {
  return build.query<ServiceResponse<GetSectorsReturnType>, GetSectorsArgsType>({
    query: ({ provinceId, municipalityId }) => ({
      url: `/${provinceId}/municipalities/${municipalityId}/sectors`,
      method: "GET",
    }),
  });
};

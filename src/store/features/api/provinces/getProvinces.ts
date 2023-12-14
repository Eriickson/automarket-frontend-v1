import { EndpointBuilderType } from "@atmk/core";

export const getProvinces = (build: EndpointBuilderType<"provincesApi">) => {
  return build.query<{ data: any; message: string }, null>({ query: () => ({ url: "/", method: "GET" }) });
};

import { EndpointBuilderType } from "@atmk/core";

interface IProvince {
  value: string;
  label: string;
}

export const getProvinces = (build: EndpointBuilderType<"provincesApi">) => {
  return build.query<{ data: { provinces: IProvince[] }; message: string }, null>({
    query: () => ({ url: "/", method: "GET" }),
  });
};

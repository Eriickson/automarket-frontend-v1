import { Option } from "@/components/organisms";

export type GetModelsByBrandIdArgsType = {
  queryParams: {
    brandId: string;
  };
};

export type GetModelsByBrandIdReturnType = {
  models: Option[];
};

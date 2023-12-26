import { BRANDS_ENDPOINTS } from "@atmk/endpoints";

export const BRANDS: Record<BRANDS_ENDPOINTS, string> = {
  GET_BRANDS: "/",
  GET_MODELS_BY_BRAND_ID: "/brands/:brandId/models",
  GET_TRIM_LEVEL_BY_BRAND_ID_AND_MODEL_ID: "/brands/:brandId/models/:modelId/trim-levels",
};

import { DEALER_BRANCHES_ENDPOINTS } from "@atmk/endpoints";

export const DEALER_BRANCHES: Record<DEALER_BRANCHES_ENDPOINTS, string> = {
  ROOT: "/",
  ADDRESS: "/:id/address",
  CONTACTS: "/:id/contacts",
};

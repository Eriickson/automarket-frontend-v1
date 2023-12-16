import { DEALERS_ENDPOINTS } from "@atmk/endpoints";

export const DEALERS: Record<DEALERS_ENDPOINTS, string> = {
  ROOT: "/dealers",
  SOCIAL_MEDIA: "dealers/:id/social-media",
};

import { AUTH_ENDPOINTS } from "@atmk/endpoints";

export const AUTH: Record<AUTH_ENDPOINTS, string> = {
  SEND_INVITATION_CODE: "/send-invitation/code",
  VERIFY_INVITATION_CODE: "/verify-invitation/code",
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  SIGNOUT: "/signout",
  REFRESH_TOKEN: "/refresh-token",
  PASSWORD_RESET_REQUEST: "/password-reset-requests",
  PASSWORD_RESET: "/password-reset",
  "TRIM-LEVELS": "/trim-levels",
  "VEHICLE-CONDITIONS": "/vehicle-conditions",
  BRANDS: "/brands",
  FUELS: "/fuels",
  MODELS: "/models",
  TRACTIONS: "/tractions",
  TRANSMISSIONS: "/transmissions",
};

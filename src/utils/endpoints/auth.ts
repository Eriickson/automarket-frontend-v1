import { AUTH_ENDPOINTS } from "@atmk/endpoints";

export const AUTH: Record<AUTH_ENDPOINTS, string> = {
  CHECK_FIELD_AVAILABILITY: "/check-field-availability/{field}/{value}",
  LOGOUT: "/logout",
  REFRESH_TOKEN: "/refresh",
  REGISTER_USER: "/register-user",
  SEND_INVITATION: "/send-invitation",
  SEND_INVITATION_CODE: "/send-invitation-code",
  SIGNIN: "/signin",
  VALIDATE_INVITATION: "/validateInvitation",
  VALIDATE_INVITATION_CODE: "/validate-invitation-code",
};

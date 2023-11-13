declare module "@atmk/endpoints" {
  export type AUTH_ENDPOINTS =
    | "SEND_INVITATION"
    | "SEND_INVITATION_CODE"
    | "VALIDATE_INVITATION"
    | "CHECK_FIELD_AVAILABILITY"
    | "REGISTER_USER"
    | "REFRESH_TOKEN"
    | "SIGNIN"
    | "LOGOUT"
    | "VALIDATE_INVITATION_CODE";
}

declare module "@atmk/endpoints" {
  export type AUTH_ENDPOINTS =
    | "SEND_INVITATION_CODE"
    | "VERIFY_INVITATION_CODE"
    | "SIGNUP"
    | "SIGNIN"
    | "SIGNOUT"
    | "REFRESH_TOKEN";

  export type DEALERS_ENDPOINTS = "ROOT" | "SOCIAL_MEDIA";
}

declare module "@atmk/endpoints" {
  export type AUTH_ENDPOINTS =
    | "SEND_INVITATION_CODE"
    | "VERIFY_INVITATION_CODE"
    | "SIGNUP"
    | "SIGNIN"
    | "SIGNOUT"
    | "REFRESH_TOKEN"
    | "PASSWORD_RESET_REQUEST"
    | "PASSWORD_RESET";

  export type DEALERS_ENDPOINTS = "ROOT" | "SOCIAL_MEDIA";

  export type DEALER_BRANCHES_ENDPOINTS = "ROOT" | "ADDRESS" | "CONTACTS";
}
